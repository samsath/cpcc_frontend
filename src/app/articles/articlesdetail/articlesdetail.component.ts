import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleDataService } from '../article-data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-articlesdetail',
  templateUrl: './articlesdetail.component.html',
  styleUrls: ['./articlesdetail.component.scss'],
})
export class ArticlesdetailComponent implements OnInit {
  article: Article;
  public slug;

  constructor(
    private route: ActivatedRoute,
    private articleDataService: ArticleDataService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.slug = params['slug']
      });
    this.article = this.articleDataService.getArticleBySlug(this.slug);
    console.log(this.slug);
    console.log(this.article);
  }

}
