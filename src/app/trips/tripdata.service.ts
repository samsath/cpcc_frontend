import { Injectable } from '@angular/core';
import { Trip } from './trip';

@Injectable()
export class TripdataService {

  trips: Trip[] = [
    {id:1,title:"Trip 1",start_date:"20 May 2017", end_date:"21 May 2017", map:"", day:"", main_image:"",slug:"trip_one",list_description:"OMG this is amazing",description:"This is also amazing",sort_value:1,is_featured:false, extra:[],gallery:[]},
    {id:2,title:"Trip 2",start_date:"21 May 2017", end_date:"21 May 2017", map:"", day:"", main_image:"",slug:"trip_two",list_description:"OMG this is amazing",description:"This is also amazing",sort_value:2,is_featured:false, extra:[],gallery:[]},
    {id:3,title:"Trip 3",start_date:"22 May 2017", end_date:"21 May 2017", map:"", day:"", main_image:"",slug:"trip_three",list_description:"OMG this is amazing",description:"This is also amazing",sort_value:3,is_featured:false, extra:[],gallery:[]},
    {id:4,title:"Trip 4",start_date:"23 May 2017", end_date:"21 May 2017", map:"", day:"", main_image:"",slug:"trip_four",list_description:"OMG this is amazing",description:"This is also amazing",sort_value:4,is_featured:false, extra:[],gallery:[]},
  ];

  constructor() { }

  addTrip(trip: Trip): TripdataService{
    this.trips.push(trip);
    return this;
  }

  getAllTrips(): Trip[]{
    return this.trips;
  }

  getTripBySlug(slug: string): Trip{
    return this.trips
      .filter(trip => trip.slug === slug)
      .pop()
  }

}
