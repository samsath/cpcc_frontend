import { Injectable } from '@angular/core';
import { Newsletter } from './newsletter';

@Injectable()
export class NewsletterDataService {

  newsletters: Newsletter[]=[
    {id:1,number:"No. 80",slug:"80",title:"To putney and back 1",date:"12/2/2018",sort_value:1,content:"<html><body>hi</body></html>"},
    {id:2,number:"No. 81",slug:"81",title:"To putney and back 2",date:"12/2/2018",sort_value:2,content:"<html><body>hi</body></html>"},
    {id:3,number:"No. 82",slug:"82",title:"To putney and back 3",date:"12/2/2018",sort_value:3,content:"<html><body>hi</body></html>"},
    {id:4,number:"No. 83",slug:"83",title:"To putney and back 4",date:"12/2/2018",sort_value:4,content:"<html><body>hi</body></html>"},
    {id:5,number:"No. 84",slug:"84",title:"To putney and back 5",date:"12/2/2018",sort_value:5,content:"<html><body>hi</body></html>"},
    {id:6,number:"No. 85",slug:"85",title:"To putney and back 6",date:"12/2/2018",sort_value:6,content:"<html><body>hi</body></html>"},
  ];


  constructor() { }

  addNewsletter(newsletter:Newsletter): NewsletterDataService {
    this.newsletters.push(newsletter);
    return this;
  }

  getAllNewsletter(): Newsletter[] {
    return this.newsletters;
  }

  getNewsltterBySlug(slug: string): Newsletter {
    return this.newsletters
      .filter(newsletter => newsletter.slug === slug)
      .pop()
  }

}
