import { Component, OnInit } from '@angular/core';
import {environment} from '../environment';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  sessions;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  get sections(){
    this.http.get(environment.API_ENDPOINT+'faq')
      .map((res: Response) => res.json())
      .subscribe((json: Array<Object>) => {
        this.sessions = json;
      });
    return this.sessions;
  }

}
