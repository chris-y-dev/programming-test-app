import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp'; //Testing as an alternative to websocket
import { enableTabToIndent } from 'indent-textarea';
import { JdoodleService } from '../../shared/services/jdoodle.service';
import { Observable, Subscription } from 'rxjs';
import { ExecuteScript, Language, Question } from '../../shared/models/models';
import { TimerComponent } from '../timer/timer.component';
import { Router } from '@angular/router';

//For WebsocketAPI
declare var SockJS: any;
declare var webstomp: any;

@Component({
  selector: 'app-ide-panel',
  templateUrl: './ide-panel.component.html',
  styleUrls: ['./ide-panel.component.scss'],
})
export class IdePanelComponent implements OnInit, OnChanges {
  @ViewChild('timer') timer!: TimerComponent;

  @Input() currentQuestion: Question | null = null;
  @Input() currentToken: string | null = null;
  @Input() currentProgress: number = 1;
  @Input() isTimed: boolean | null = null;
  @Input() selectedLanguage: Language | null = null;
  @Output() emitNextQuestion: EventEmitter<number> = new EventEmitter();
  @Output() emitScriptsForExecution: EventEmitter<ExecuteScript[]> =
    new EventEmitter();

  socketClient: any;
  codeInput: string = '';
  testResponse$: any | null = null;
  showTestCasePanel: boolean = false;
  timesUp: boolean = false;

  finishedScripts: ExecuteScript[] = [];

  constructor(private jdoodleService: JdoodleService, private router: Router) {}

  ngOnInit(): void {
    this.renderDefaultScriptInIDE();

    this.loadScript(
      'https://cdn.jsdelivr.net/npm/sockjs-client@1/dist/sockjs.min.js'
    );

    this.socketClient = webstomp.over(
      new SockJS('https://api.jdoodle.com/v1/stomp'),
      {
        heartbeat: false,
        debug: true,
      }
    );

    // this.socketClient.connect(
    //   {},
    //   this.onWsConnection,
    //   this.onWsConnectionFailed
    // );

    //Enable tab input
    const textarea = document.querySelector('textarea');
    enableTabToIndent(textarea!);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentQuestion'] != undefined) {
      this.renderDefaultScriptInIDE();
    }
  }

  // onWsConnection() {
  //   console.log('connection succeeded');
  //   let wsNextId = 0;

  //   this.socketClient.subscribe('/user/queue/execute-i', (message: any) => {
  //     let msgId = message.headers['message-id'];
  //     let msgSeq = parseInt(msgId.substring(msgId.lastIndexOf('-') + 1));

  //     let statusCode = parseInt(message.headers.statusCode);

  //     if (statusCode === 201) {
  //       wsNextId = msgSeq + 1;
  //       return;
  //     }

  //     let t0;
  //     try {
  //       t0 = performance.now();
  //       while (performance.now() - t0 < 2500 && wsNextId !== msgSeq) {}
  //     } catch (e) {}

  //     if (statusCode === 204) {
  //       //executionTime = message.body
  //     } else if (statusCode === 500 || statusCode === 410) {
  //       //server error
  //       console.log('server error');
  //     } else if (statusCode === 206) {
  //       //outputFiles = JSON.parse(message.body)
  //       //returns file list - not supported in this custom api
  //     } else if (statusCode === 429) {
  //       //Daily limit reached
  //       console.log('daily limit reached');
  //     } else if (statusCode === 400) {
  //       //Invalid request - invalid signature or token expired - check the body for details
  //       console.log('invalid request - invalid signature or token expired');
  //     } else if (statusCode === 401) {
  //       //Unauthorised request
  //       console.log('Unauthorised request');
  //     } else {
  //       var txt = (document.getElementById('result') as HTMLInputElement).value;
  //       (document.getElementById('result') as HTMLInputElement).value =
  //         txt + message.body;
  //     }

  //     wsNextId = msgSeq + 1;
  //   });

  //   let script = `console.log("HELLO")`;

  //   let data = JSON.stringify({
  //     script: script,
  //     language: 'nodejs',
  //     versionIndex: 0,
  //   });

  //   this.socketClient.send('/app/execute-ws-api-token', data, {
  //     message_type: 'execute',
  //     token: this.currentToken,
  //   });
  // }

  onWsConnectionFailed(e: any) {
    console.log('connection failed');
    console.log(e);
  }

  public loadScript(url: string) {
    const body = document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.type = 'text/javascript';
    script.async = false;
    script.defer = false;
    body.appendChild(script);
  }

  onInput(event: any) {
    // console.log('Value', event.target.value);
    // console.log('Key', event.key);
    //For WebsocketAPI
    // let key = event.key;
    // console.log(key);
    // if (event.key === 'Enter') {
    //   key = '\n';
    // }
    // if (event.key !== 'Backspace') {
    //   this.codeInput = `${event.target.value + key}`;
    // } else {
    //   this.codeInput = this.codeInput.slice(0, this.codeInput.length - 1);
    //   console.log(this.codeInput);
    // }
    // this.socketClient.send('/app/execute-ws-api-token', key, {
    //   message_type: 'input',
    // });
  }

  renderDefaultScriptInIDE() {
    var textArea = document.getElementById('ide') as HTMLInputElement;

    var defaultFuncName = this.currentQuestion?.defaultFunctionWithParameters;

    var defaultScript = this.selectedLanguage?.defaultScript;

    var script = `function ${defaultFuncName}${defaultScript}`;

    console.log(script);

    textArea.value = script;
  }

  handleTest() {
    // console.log(this.codeInput);
    this.showTestCasePanel = true;

    const finalScript: string | undefined =
      this.generateFullScriptForExecution();

    this.socketClient.send('/app/execute-ws-api-token', this.codeInput, {
      message_type: 'input',
    });

    this.jdoodleService
      .postScriptForExecution(
        finalScript,
        this.currentQuestion?.defaultTestCase.parameter
      )
      .subscribe((res) => {
        console.log(res);
        this.testResponse$ = res;
      });
  }

  handleNext() {
    //TODO: Store code for later processing
    const finalScript: string | undefined =
      this.generateFullScriptForExecution();

    this.finishedScripts.push(
      new ExecuteScript(finalScript, this.currentQuestion!)
    );

    //Next step
    if (this.currentProgress == 5) {
      this.emitScriptsForExecution.emit(this.finishedScripts);
    } else {
      this.currentProgress++;
      this.emitNextQuestion.emit(this.currentProgress);
      if (this.timer != undefined) {
        this.timer.resetTimer();
        this.timer.startTimer();
      }
    }

    //Clean up current page

    // if (textArea != null) {
    //   textArea.value = '';
    // }

    this.testResponse$ = null;
    this.showTestCasePanel = false;
  }

  generateFullScriptForExecution(): string | undefined {
    var textArea = document.getElementById('ide') as HTMLInputElement;
    console.log(textArea.value);

    const userInput = textArea.value;

    var script = this.currentQuestion?.executionScript;
    var finalScript = script?.replace('//USERINPUT', userInput);

    return finalScript;
  }

  getNextButtonText() {
    if (this.currentProgress == 5) {
      return 'Get Results';
    } else {
      return 'Next';
    }
  }

  handleTimesUp(isTimesUp: boolean) {
    this.timesUp = isTimesUp;
  }

  executeAllScriptsOnJDoodle() {}
}
