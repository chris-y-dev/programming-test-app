import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ide-panel',
  templateUrl: './ide-panel.component.html',
  styleUrls: ['./ide-panel.component.scss'],
})
export class IdePanelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.loadScript('https://www.jdoodle.com/assets/jdoodle-pym.min.js');
  }

  public loadScript(url: string) {
    const body = document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
