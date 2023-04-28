import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';
import { enableTabToIndent } from 'indent-textarea';
import { JdoodleService } from '../../shared/services/jdoodle.service';
import { Observable } from 'rxjs';
declare var SockJS: any;
declare var webstomp: any;

@Component({
  selector: 'app-ide-panel',
  templateUrl: './ide-panel.component.html',
  styleUrls: ['./ide-panel.component.scss'],
})
export class IdePanelComponent implements OnInit {
  // rxStomp = new RxStomp();
  @Input() currentToken: string | null = null;
  @Input() currentProgress: number = 1;
  @Output() emitNextQuestion: EventEmitter<number> = new EventEmitter();
  socketClient: any;
  codeInput: string = '';

  testResponse$: Promise<any> | null = null;

  ngOnInit(): void {
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

    this.socketClient.connect(
      {},
      this.onWsConnection,
      this.onWsConnectionFailed
    );

    const textarea = document.querySelector('textarea');
    enableTabToIndent(textarea!);
  }
  constructor(private jdoodleService: JdoodleService) {}

  onWsConnection() {
    console.log('connection succeeded');
    let wsNextId = 0;

    this.socketClient.subscribe('/user/queue/execute-i', (message: any) => {
      let msgId = message.headers['message-id'];
      let msgSeq = parseInt(msgId.substring(msgId.lastIndexOf('-') + 1));

      let statusCode = parseInt(message.headers.statusCode);

      if (statusCode === 201) {
        wsNextId = msgSeq + 1;
        return;
      }

      let t0;
      try {
        t0 = performance.now();
        while (performance.now() - t0 < 2500 && wsNextId !== msgSeq) {}
      } catch (e) {}

      if (statusCode === 204) {
        //executionTime = message.body
      } else if (statusCode === 500 || statusCode === 410) {
        //server error
        console.log('server error');
      } else if (statusCode === 206) {
        //outputFiles = JSON.parse(message.body)
        //returns file list - not supported in this custom api
      } else if (statusCode === 429) {
        //Daily limit reached
        console.log('daily limit reached');
      } else if (statusCode === 400) {
        //Invalid request - invalid signature or token expired - check the body for details
        console.log('invalid request - invalid signature or token expired');
      } else if (statusCode === 401) {
        //Unauthorised request
        console.log('Unauthorised request');
      } else {
        var txt = (document.getElementById('result') as HTMLInputElement).value;
        (document.getElementById('result') as HTMLInputElement).value =
          txt + message.body;
      }

      wsNextId = msgSeq + 1;
    });

    let script = `console.log("HELLO")`;

    let data = JSON.stringify({
      script: script,
      language: 'nodejs',
      versionIndex: 0,
    });

    this.socketClient.send('/app/execute-ws-api-token', data, {
      message_type: 'execute',
      token: this.currentToken,
    });
  }

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
    console.log('Value', event.target.value);
    console.log('Key', event.key);

    let key = event.key;
    console.log(key);
    if (event.key === 'Enter') {
      key = '\n';
    }
    this.codeInput = `${event.target.value + key}`;

    this.socketClient.send('/app/execute-ws-api-token', key, {
      message_type: 'input',
    });

    console.log(this.codeInput);
  }

  handleTest() {
    console.log(this.codeInput);

    // this.socketClient.send('/app/execute-ws-api-token', this.codeInput, {
    //   message_type: 'input',
    // });

    this.jdoodleService
      .postScriptForExecution(this.codeInput)
      .subscribe((res) => {
        console.log(res);
        console.log(res.output);
        this.testResponse$ = res.output;
      });
  }

  handleNext() {
    var textArea = document.getElementById('ide') as HTMLInputElement;
    if (textArea != null) {
      textArea.value = '';
    }

    this.testResponse$ = null;

    this.currentProgress++;
    this.emitNextQuestion.emit(this.currentProgress);
  }
}
