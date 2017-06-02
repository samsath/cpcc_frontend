import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../environment';
import {routerTransition} from '../router.animations';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class EnquiryComponent implements OnInit {

  image;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get(environment.API_ENDPOINT+'pageimage')
      .map((res: Response) => res.json()).subscribe((json: Object) =>{
      this.image = json[0]['main_image']['image'];
    });
  }

}
