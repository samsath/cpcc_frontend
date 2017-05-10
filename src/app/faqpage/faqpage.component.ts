import { Component, OnInit } from '@angular/core';
import { Faq } from './faq';
import { FaqdataService } from './faqdata.service';

@Component({
  selector: 'app-faqpage',
  templateUrl: './faqpage.component.html',
  styleUrls: ['./faqpage.component.scss'],
  providers: [FaqdataService]
})
export class FaqpageComponent implements OnInit {

  constructor(private faqdataService: FaqdataService) { }

  ngOnInit() {
  }

  get faqs(){
    return this.faqdataService.getAllFaq();
  }

}
