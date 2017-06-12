import { Injectable } from '@angular/core';
import { Eventdate } from './eventdate';
import {environment} from '../environment';
import {Http, Response} from '@angular/http';

@Injectable()
export class CalendarService {

  calendar: {[s:string]: any }= <any>{};
  date: string;
  checking:boolean;
  month: number;
  year: number;
  datecheck:Array<string> = [];

  constructor(private http: Http) { }

  getMonth():void {
    this.http.get(environment.API_ENDPOINT+'calender/' + this.year +'/' + this.month)
      .map((res: Response) => res.json())
      .subscribe((json: Array<Object>) => {
        for (let item of json) {
          let day = new Eventdate(item);
          this.calendar[day.date] = day;
        }
      });
    console.log(this.calendar);
  }


  getRemoteDay(year:string, month:string, day:string){
    let str_date = year + '-' + month + '-' + day;
    if (this.datecheck.indexOf(str_date) === -1) {
      this.http.get(environment.API_ENDPOINT + 'calender/' + year + '/' + month + '/' + day)
        .map((res: Response) => res.json())
        .subscribe((json: Array<Object>) => {
          this.calendar[str_date] = new Eventdate(json);
          let index = this.datecheck.indexOf(str_date,0);
          if(index > -1){
            this.datecheck.splice(index,1);
          }
        });
    }
  }


  getDay(date: Date): Eventdate {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    let str_year = year.toString();
    let str_month = month.toString();
    let str_day = day.toString();
    if(str_month.length < 2){
      str_month = '0'+str_month;
    }
    if (str_day.length < 2){
      str_day = '0' + str_day;
    }

    let str_date = str_year + '-' + str_month + '-' + str_day;

    if(this.calendar[str_date] === undefined || null){
      if(this.datecheck.indexOf(str_date) === -1){
        this.datecheck.push(str_date);
        this.getRemoteDay(str_year, str_month, str_day);
      }
    }

    return this.calendar[str_date];

  }

  getCalendar(date:Date): void {
    let year = date.getFullYear();
    let month = date.getMonth();
    if(this.year != year || this.month != month){
      this.year = year;
      this.month = month;
      this.checking = false;
    }
    if(!this.checking){
      this.getMonth();
      this.checking = true;
    }
    console.log(this.calendar);
  }

}
