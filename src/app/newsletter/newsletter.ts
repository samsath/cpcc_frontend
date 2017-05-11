export class Newsletter {
  id: number;
  slug: string;
  number: string;
  title: string;
  date: string;
  sort_value: number;
  content: string;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}
