import { Injectable } from '@angular/core';
import { Faq } from './faq';

@Injectable()
export class FaqdataService {
  lastId: number = 0;
  faqs: Faq[] = [
    {"id":1, "question":"Question one", "answer":"anseredf sdf sfd", "sort_value":1},
    {"id":2, "question":"Question two", "answer":"anseredf sdf sfd wdsf asdf sadf sdf.sd fsdf sdf sdf sdf sdaf regwergd gfsdg r rsgrsfdsg resg srgfd gresg ewgfdsg sfd gfdg ergweg dfs dfggr.anseredf sdf sfd wdsf asdf sadf sdf.sd fsdf sdf sdf sdf sdaf regwergd gfsdg r rsgrsfdsg resg srgfd gresg ewgfdsg sfd gfdg ergweg dfs dfggr.anseredf sdf sfd wdsf asdf sadf sdf.sd fsdf sdf sdf sdf sdaf regwergd gfsdg r rsgrsfdsg resg srgfd gresg ewgfdsg sfd gfdg ergweg dfs dfggr.anseredf sdf sfd wdsf asdf sadf sdf.sd fsdf sdf sdf sdf sdaf regwergd gfsdg r rsgrsfdsg resg srgfd gresg ewgfdsg sfd gfdg ergweg dfs dfggr.", "sort_value":2},
    {"id":3, "question":"Question three", "answer":"anseredf sdf sfd", "sort_value":3},
    {"id":4, "question":"Question four", "answer":"anseredf sdf sfd", "sort_value":4},
  ];

  constructor() { }

  addFaq(faq: Faq ): FaqdataService {
    if( !faq.id ){
      faq.id = ++this.lastId;
    }
    this.faqs.push(faq);
    return this;
  }

  getAllFaq(): Faq[] {
    return this.faqs;
  }

  getAllFaqId(id: number): Faq {
    return this.faqs
      .filter(faq => faq.id === id)
      .pop()
  }

}
