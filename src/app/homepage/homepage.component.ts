import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../environment';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  title = 'Chiswick Pier Canoe Club';
  homepage;
  images:string;
  defaultImage = 'https://www.placecage.com/1000/1000';
  offset = 1000;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get(environment.API_ENDPOINT+'homepage')
      .map((res: Response) => res.json()).subscribe((json: Object) =>{
        if(json[0]['main_image']){
          this.images = json[0]['main_image']['image'];
          console.log(this.images);
        }
        this.homepage = json;

      });



  }

}
