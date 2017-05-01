import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mainimage',
  templateUrl: './mainimage.component.html',
  styleUrls: ['./mainimage.component.scss']
})
export class MainimageComponent implements OnInit {
  defaultImage = 'https://www.placecage.com/1000/1000';
  offset = 100;

  @Input()
  image: string;

  constructor() { }

  ngOnInit() {
  }

}
