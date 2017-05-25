import {Component, Input, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import {environment} from '../environment';

@Component({
  selector: 'app-mainimage',
  templateUrl: './mainimage.component.html',
  styleUrls: ['./mainimage.component.scss']
})
export class MainimageComponent implements OnInit {
  defaultImage = 'https://www.placecage.com/1000/1000';
  offset = 100;
  image:string;


  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get(environment.API_ENDPOINT+'homepageimage')
      .map((res: Response) => res.json()).subscribe((json: Object) =>{
      console.log(environment.API_ENDPOINT+json['main_image']['image']['file']);
      this.image = environment.API_ENDPOINT+json['main_image']['image']['file']
    });
  }

}
