import {Component, Input, OnInit} from '@angular/core';
import { Trip } from '../trips/trip';

@Component({
  selector: 'app-maplist-item',
  templateUrl: './maplist-item.component.html',
  styleUrls: ['./maplist-item.component.scss']
})
export class MaplistItemComponent implements OnInit {

  options = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 })
    ],
    zoom: 14,
    zoomControl:false,
    center: L.latLng({ lat: 51.4822222, lng: -0.251482 })
  };

  @Input()
  trip: Trip;

  constructor() { }

  ngOnInit() {
  }

}
