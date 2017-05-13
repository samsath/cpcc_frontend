export class Trip {
  id: number;
  title: string;
  start_date: string;
  end_date: string;
  map: string;
  day: string;
  main_image: string;
  is_featured: boolean;
  slug: string;
  list_description: string;
  description: string;
  sort_value: number;
  extra: Array<string>;
  gallery: Array<string>;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}
