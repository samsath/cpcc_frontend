import { Injectable } from '@angular/core';
import { Trip } from './trip';

@Injectable()
export class TripdataService {

  trips: Trip[] = [];

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
