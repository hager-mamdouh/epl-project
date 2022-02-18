import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news/news.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

  data;
  constructor(private newsService:NewsService) { }

  ngOnInit(): void {
    this.data= this.newsService.Data;
    console.log(this.data.default);
    
    

  }

}
