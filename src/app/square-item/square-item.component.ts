import {Component, Input, OnInit} from '@angular/core';
import { Article } from '../articles/article';

@Component({
  selector: 'app-square-item',
  templateUrl: './square-item.component.html',
  styleUrls: ['./square-item.component.scss']
})
export class SquareItemComponent implements OnInit {
  defaultImage = 'https://www.placecage.com/1000/1000';
  offset = 100;

  @Input()
  article: Article;

  constructor() { }

  ngOnInit() {
  }

}
