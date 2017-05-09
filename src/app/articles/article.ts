export class Article {
  id: number;
  title: string;
  post_date: string;
  main_image: string;
  is_featured: boolean;
  slug: string;
  list_description: string;
  description: string;
  author: string;
  sort_value: number;
  category: string;
  gallery: Array<string>;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}
