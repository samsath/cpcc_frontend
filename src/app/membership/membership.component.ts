import { Component, OnInit } from '@angular/core';
import { MembershipService } from './membership.service';
import { Http, Response } from '@angular/http';
import { environment } from '../environment';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {

  column:number;
  image;

  constructor(private http: Http,
              private membershipService: MembershipService) { }

  ngOnInit() {
    this.http.get(environment.API_ENDPOINT+'pageimage')
      .map((res: Response) => res.json()).subscribe((json: Object) =>{
      this.image = json[0]['main_image']['image'];
    });
  }

  get members(){
    let memberships = this.membershipService.getAllMembership();
    this.column = memberships.length;
    return memberships;
  }

}
