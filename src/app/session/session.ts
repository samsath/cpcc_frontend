import { NextSession } from '../next-session/next-session';

export class Coord {
  type: string;
  coordinates;

  constructor( values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Location {
  id:number;
  name:string;
  description:string;
  slug:string;
  content_type:number;
  created:string;
  centre:Coord;
  path:Coord;

  constructor( values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Media {
  id:number;
  image:Object;
  download:Object;
  embeded:Object;
  map:Location;
  pdf:Object;
  video:Object;
  name:string;
  description:string;
  slug:string;
  created:string;
  content_type: number;

  constructor( values: Object = {}) {
    Object.assign(this, values);
  }

}

export class Session {
  pk:number;
  title:string;
  description:string;
  cost:string;
  day_of_week:string;
  sort_value:number;
  location:Media;
  created:string;
  modified:string;
  nextsession:NextSession;
  centre:Object;
  path:Array<Object>;
  options:Object;

  constructor( values: Object = {}) {
    Object.assign(this, values);
  }
}
