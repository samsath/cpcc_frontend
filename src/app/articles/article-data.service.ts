import { Injectable } from '@angular/core';
import { Article } from './article';


@Injectable()
export class ArticleDataService {

  articles: Article[] = [
    {"id":1,"title":"articlea","post_date":"9 May 2017","main_image":"https://sanmanuel.com/sites/default/files/styles/medium/public/basic/squares/BQ_200x200_0.jpg?itok=zzbg3jQj", "is_featured":false,"slug":"articlea","list_description":"this is a test list look out here","description":"sdfasdfasdfds","author":"sam","sort_value":1,"category":"all","gallery":[]},
    {"id":2,"title":"articleb","post_date":"9 May 2017","main_image":"https://sanmanuel.com/sites/default/files/styles/medium/public/basic/squares/BQ_200x200_0.jpg?itok=zzbg3jQj", "is_featured":false,"slug":"articleb","list_description":"this is a test list look out here","description":"sdfasdfasdfds","author":"sam","sort_value":2,"category":"all","gallery":[]},
    {"id":3,"title":"articleb","post_date":"9 May 2017","main_image":"https://sanmanuel.com/sites/default/files/styles/medium/public/basic/squares/BQ_200x200_0.jpg?itok=zzbg3jQj", "is_featured":false,"slug":"articlec","list_description":"this is a test list look out here","description":"sdfasdfasdfds","author":"sam","sort_value":3,"category":"all","gallery":[]},
    {"id":4,"title":"articlec","post_date":"9 May 2017","main_image":"https://sanmanuel.com/sites/default/files/styles/medium/public/basic/squares/BQ_200x200_0.jpg?itok=zzbg3jQj", "is_featured":false,"slug":"articlec","list_description":"this is a test list look out here","description":"sdfasdfasdfds","author":"sam","sort_value":4,"category":"all","gallery":[]},
    {"id":5,"title":"articled","post_date":"9 May 2017","main_image":"https://sanmanuel.com/sites/default/files/styles/medium/public/basic/squares/BQ_200x200_0.jpg?itok=zzbg3jQj", "is_featured":false,"slug":"articled","list_description":"this is a test list look out here","description":"sdfasdfasdfds","author":"sam","sort_value":5,"category":"all","gallery":[]},
    {"id":6,"title":"articlee","post_date":"9 May 2017","main_image":"https://sanmanuel.com/sites/default/files/styles/medium/public/basic/squares/BQ_200x200_0.jpg?itok=zzbg3jQj", "is_featured":false,"slug":"articlee","list_description":"this is a test list look out here","description":"sdfasdfasdfds","author":"sam","sort_value":6,"category":"all","gallery":[]},
    {"id":7,"title":"articlef","post_date":"9 May 2017","main_image":"https://sanmanuel.com/sites/default/files/styles/medium/public/basic/squares/BQ_200x200_0.jpg?itok=zzbg3jQj", "is_featured":false,"slug":"articlef","list_description":"this is a test list look out here","description":"sdfasdfasdfds","author":"sam","sort_value":7,"category":"all","gallery":[]},
    {"id":8,"title":"articleg","post_date":"9 May 2017","main_image":"https://sanmanuel.com/sites/default/files/styles/medium/public/basic/squares/BQ_200x200_0.jpg?itok=zzbg3jQj", "is_featured":false,"slug":"articleg","list_description":"this is a test list look out here","description":"sdfasdfasdfds","author":"sam","sort_value":8,"category":"all","gallery":[]},
    {"id":9,"title":"articleh","post_date":"9 May 2017","main_image":"https://sanmanuel.com/sites/default/files/styles/medium/public/basic/squares/BQ_200x200_0.jpg?itok=zzbg3jQj", "is_featured":false,"slug":"articleh","list_description":"this is a test list look out here","description":"sdfasdfasdfds","author":"sam","sort_value":9,"category":"all","gallery":[]},
    {"id":10,"title":"articlej","post_date":"9 May 2017","main_image":"https://sanmanuel.com/sites/default/files/styles/medium/public/basic/squares/BQ_200x200_0.jpg?itok=zzbg3jQj", "is_featured":false,"slug":"articlej","list_description":"this is a test list look out here","description":"sdfasdfasdfds","author":"sam","sort_value":10,"category":"all","gallery":[]},
    {"id":11,"title":"articlek","post_date":"9 May 2017","main_image":"https://sanmanuel.com/sites/default/files/styles/medium/public/basic/squares/BQ_200x200_0.jpg?itok=zzbg3jQj", "is_featured":false,"slug":"articlek","list_description":"this is a test list look out here","description":"sdfasdfasdfds","author":"sam","sort_value":11,"category":"all","gallery":[]},
    {"id":12,"title":"articlek","post_date":"9 May 2017","main_image":"https://sanmanuel.com/sites/default/files/styles/medium/public/basic/squares/BQ_200x200_0.jpg?itok=zzbg3jQj", "is_featured":false,"slug":"articlel","list_description":"this is a test list look out here","description":"sdfasdfasdfds","author":"sam","sort_value":12,"category":"all","gallery":[]},
  ];

  constructor() { }

  addArticle(article: Article ): ArticleDataService {
    this.articles.push(article);
    return this;
  }

  getAllArticles(): Article[] {
    return this.articles;
  }

  getArticleBySlug(slug: string ): Article{
    return this.articles
      .filter(article => article.slug === slug)
      .pop()
  }

  getArticleForCategory(slug: string): Article{
    return this.articles
      .filter(article => article.category.indexOf(slug) !== -1)
      .pop()
  }

}
