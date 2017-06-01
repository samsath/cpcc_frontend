import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { TripdataService } from '../tripdata.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-triplist',
  templateUrl: './triplist.component.html',
  styleUrls: ['./triplist.component.scss'],
})
export class TriplistComponent implements OnInit {



  constructor(private tripdataservice: TripdataService) { }

  ngOnInit() {
  }

  get trips(){
    return this.tripdataservice.getAllTrips();
  }

}
