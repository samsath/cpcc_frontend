import { Injectable } from '@angular/core';
import {environment} from '../environment';
import { Http, Response } from '@angular/http';
import { Session } from './session';

@Injectable()
export class SessiondataService {
  lastId: number = 0;
  sessions: Session[] =[];
  checking:boolean;

  constructor(private http: Http) { }

  getSession(){
    this.http.get(environment.API_ENDPOINT+'sessions')
      .map((res: Response) => res.json())
      .subscribe((json: Array<Object>) => {
        for (let item of json){
          let session = new Session(item);
          this.addSession(session);
        }
      })
  }

  addSession(session: Session ): SessiondataService {
    if( !session.pk ){
      session.pk = ++this.lastId;
    }
    this.sessions.push(session);
    return this;
  }

  getAllSession(): Session[] {
    //this.getFaq();
    if (this.sessions.length == 0 && !this.checking){
      this.getSession();
      this.checking = true;
    }
    return this.sessions;
  }
}
