export class Gallery{
  id:number;
  image:Object;
  download:Object;
  embeded:Object;
  map:Object;
  pdf:Object;
  video:Object;
  name:string;
  description:string;
  slug:string;
  created:string;
  content_type:number;
  next:string;
  prev:string;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}


export class Article {
  pk: number;
  title: string;
  post_date: string;
  main_image: Object;
  is_featured: boolean;
  is_public: boolean;
  slug: string;
  list_description: string;
  description: string;
  author: Object;
  sort_value: number;
  category: Array<Object>;
  gallery: Array<Gallery>;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}

