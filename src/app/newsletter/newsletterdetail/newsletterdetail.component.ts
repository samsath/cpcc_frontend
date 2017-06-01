import { Component, OnInit } from '@angular/core';
import { Newsletter } from '../newsletter';
import { NewsletterDataService } from '../newsletter-data.service'
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-newsletterdetai',
  templateUrl: './newsletterdetail.component.html',
  styleUrls: ['./newsletterdetail.component.scss']
})
export class NewsletterdetailComponent implements OnInit {
  newsletter: Newsletter;
  public slug;

  constructor(
    private route: ActivatedRoute,
    private newsletterData: NewsletterDataService,
    private  router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.slug = params['slug']
      });
    this.newsletter = this.newsletterData.getNewsltterBySlug(this.slug);
  }

}
