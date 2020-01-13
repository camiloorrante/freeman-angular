import { Component, OnInit } from '@angular/core';
import { New } from 'src/app/models/new.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: Array<New> = [];
  constructor() { 
    this.news.push(new New(0,'BANK OF CHINA','assets/images/news/BANK',3))
    this.news.push(new New(0,'EXPO','assets/images/news/EXPO',11))
    this.news.push(new New(0,'LAC','assets/images/news/LAC',9))
    this.news.push(new New(0,'PLENARIA','assets/images/news/PLENARIA',4))
    this.news.push(new New(0,'RISEN','assets/images/news/RISEN',2))
  }

  ngOnInit() {
    
  }

}
