export class NextSession {
  date: string;
  content: string;
  club: boolean;
  membersonly: false;
  temp: string;
  weather: number;
  tide: string;

  constructor( values: Object = {}) {
    Object.assign(this, values);
  }
}