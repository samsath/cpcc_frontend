import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { TripdataService } from '../tripdata.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tripdetail',
  templateUrl: './tripdetail.component.html',
  styleUrls: ['./tripdetail.component.scss'],
  providers:[TripdataService]
})
export class TripdetailComponent implements OnInit {
  trip: Trip;
  public slug;

  constructor(
    private route: ActivatedRoute,
    private tripdataService: TripdataService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.slug = params['slug']
      });
    this.trip = this.tripdataService.getTripBySlug(this.slug);
  }

}
