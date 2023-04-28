import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JdoodleService {
  constructor(private http: HttpClient) {}

  getToken(): Observable<any> {
    return this.http.get('http://localhost:3000/token');
  }

  postScriptForExecution(script: any): Observable<any> {
    return this.http.post('http://localhost:3000/execute', {
      script: script,
    });
  }
}
