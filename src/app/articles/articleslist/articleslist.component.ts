import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleDataService } from '../article-data.service';

@Component({
  selector: 'app-articleslist',
  templateUrl: './articleslist.component.html',
  styleUrls: ['./articleslist.component.scss'],
})
export class ArticleslistComponent implements OnInit {

  constructor(private articleDataService: ArticleDataService) { }

  ngOnInit() {
  }

  get articles(){
    return this.articleDataService.getAllArticles();
  }

}
