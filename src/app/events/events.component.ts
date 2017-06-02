import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import {routerTransition} from '../router.animations';


interface CppEvent extends CalendarEvent {
  type: String;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class EventsComponent implements OnInit {
  viewDate: Date = new Date();
  events: CppEvent[] = [];
  view: string = 'month';

  constructor() {}


  dayData(cell: CalendarMonthViewDay):void {
    const tide:Array<any> = [
      {data: [{x:0,y:3},{x:4.2, y:0.2 },{x:9.5,y:4.7},{x:17.0,y:0.4},{x:20,y:4.6},{x:24,y:3.9}], label: 'Tide'},
    ];
    const tideoptions: any = {
      responsive:false,
      maintainAspectRatio: true,
      legend:{display:false},
      scales:{yAxes:[{display:false}],xAxes:[{display:false,type: 'linear',position:'bottom'}]}
    };
    const colour:Array<any> = [{
      backgroundColor: '#fff',
      borderColor: '#2287b0',
      pointBackgroundColor: '#2287b0',
      pointBorderColor: '#2287b0',
      pointHoverBackgroundColor: '#2287b0',
      pointHoverBorderColor: '#2287b0'
    }];
    const weather: string = "10 C";
    const activities: any = {};
    cell['tideData'] = Object.assign(tide);
    cell['tideOptions'] = Object.assign(tideoptions);
    cell['tideColour'] = Object.assign(colour);
    cell['dayWeather'] = Object.assign(weather);
    cell['dayActivites'] = Object.assign(activities);
  }

  ngOnInit() {
  }


}
