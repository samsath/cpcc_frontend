import { Component, OnInit } from '@angular/core';
import { Newsletter } from '../newsletter';
import { NewsletterDataService } from '../newsletter-data.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
  providers: [NewsletterDataService]
})
export class NewsletterComponent implements OnInit {

  constructor(private newsletterDataService: NewsletterDataService) { }

  ngOnInit() {
  }

  get newsletters(){
    return this.newsletterDataService.getAllNewsletter();
  }

}
