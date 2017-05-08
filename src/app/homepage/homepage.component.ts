import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  title = 'Chiswick Pier Canoe Club';
  image = 'https://f58619eed67ecf47f9c5-69635130c45beb2524d5bafa9c042fe0.ssl.cf3.rackcdn.com/heroImages/_2000xAUTO_crop_center-center_70/Claire-Williams-nature-environment-wildlife.jpg';

  constructor() { }

  ngOnInit() {
  }

}
