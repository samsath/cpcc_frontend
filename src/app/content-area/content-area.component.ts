import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.scss']
})
export class ContentAreaComponent implements OnInit {

  @Input()
  column: number;

  @Input()
  title: string;

  @Input()
  content: string;

  constructor() { }

  ngOnInit() {
  }

}
