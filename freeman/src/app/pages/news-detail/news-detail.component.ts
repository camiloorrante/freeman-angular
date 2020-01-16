import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { NewsService } from 'src/app/services/news-service';
import { New } from 'src/app/models/new.model';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  freemanNew: any;
  originalItems = [];
  miniatureItems = [];
  constructor(private newsService: NewsService,
    private activeRoute: ActivatedRoute,
    private _renderer2: Renderer2, 
        @Inject(DOCUMENT) private _document: Document) {
    this.freemanNew = this.newsService.getNewById(this.activeRoute.snapshot.params.id)

    for (let i = 0; i < this.freemanNew.imagesCount; i++) {
      this.originalItems.push(`${this.freemanNew.imagesRoute}/Originales/${i}.jpeg`);
    }
  }

  ngOnInit() {
    
  }

  public ngAfterViewInit() { 
     let script = this._renderer2.createElement('script');
        script.text = `
            baguetteBox.run('.tz-gallery');
        `;

        this._renderer2.appendChild(this._document.body, script);
  }

}
