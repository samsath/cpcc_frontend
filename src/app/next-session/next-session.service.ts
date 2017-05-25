import { Injectable } from '@angular/core';
import { NextSession } from './next-session';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../environment';

@Injectable()
export class NextSessionService {
  private url: '';
  session;

  updateSession() {
    this.session = this.http.get(environment.API_ENDPOINT+'/nextsession').map(res => res.json())
  }

  getSession(): NextSession {
    if ( !this.session ) {
      this.updateSession();
    }
    return this.session;
  }

  private getHeaders() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  /*
  getRequest(): Observable<NextSession> {
    const session = this.http;

    return session;
  }
  */


  constructor(private http: Http) { }

}
