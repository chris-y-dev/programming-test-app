import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventEmitterService {
  dataStr = new EventEmitter();

  constructor() {}

  emitScriptsToResultsPage(scripts: string[]) {
    this.dataStr.emit(scripts);
  }
}
