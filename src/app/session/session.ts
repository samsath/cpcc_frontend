import { NextSession } from '../next-session/next-session';

export class Session {
  pk:number;
  title:string;
  description:string;
  cost:string;
  day_of_week:string;
  sort_value:number;
  location:Object;
  created:string;
  modified:string;
  nextsession:NextSession;

  constructor( values: Object = {}) {
    Object.assign(this, values);
  }
}
