import { Injectable } from '@angular/core';
import { Eventdate } from './eventdate';
import {environment} from '../environment';
import {Http, Response} from '@angular/http';

@Injectable()
export class CalendarService {

  calendar: Eventdate[]= [];
  checking: boolean;
  date: string;

  month: number;
  year: number;

  constructor(private http: Http) { }

  getMonth():void {
    this.http.get(environment.API_ENDPOINT+'calender/' + this.year +'/' + this.month)
      .map((res: Response) => res.json())
      .subscribe((json: Array<Object>) => {
        for (let item of json) {
          let day = new Eventdate(item);
          this.addDay(day);
        }
      })
  }

  addDay(day: Eventdate): CalendarService {
    this.calendar.push(day);
    return this;
  }

  getCalendar(year: number, month: number): Eventdate[] {
    if(this.year != year || this.month != month){
      this.year = year;
      this.month = month;
      this.checking = false;
    }
    if(!this.checking){
      this.getMonth();
      this.checking = true;
    }
    return this.calendar;
  }

}
