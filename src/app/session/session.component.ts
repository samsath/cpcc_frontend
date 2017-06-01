import { Component, OnInit } from '@angular/core';
import {environment} from '../environment';
import { Http, Response } from '@angular/http';
import { SessiondataService } from './sessiondata.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  sessions;
  column:number;

  options = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 })
    ],
    zoom: 14,
    zoomControl:false,
  };

  constructor(private http: Http,
              private sessionsdata: SessiondataService) { }

  ngOnInit() {
  }

  get sections(){
    let session = this.sessionsdata.getAllSession();
    this.column = session.length;
    return session;
  }

}
