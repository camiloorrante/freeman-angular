import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslationComponent } from './i18n/translation/translation.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './pages/news/news.component';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { VideoComponent } from './pages/video/video.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { MapComponent } from './pages/map/map.component';
import { BrochureComponent } from './pages/brochure/brochure.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news',      component: NewsComponent },
  { path: 'news/:id',      component: NewsDetailComponent },
  { path: 'video',      component: VideoComponent },
  { path: 'map',      component: MapComponent },
  { path: 'brochure',      component: BrochureComponent },
  // { path: 'contact',      component: HeroDetailComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TranslationComponent,
    HomeComponent,
    NewsComponent,
    NewsDetailComponent,
    ReplacePipe,
    VideoComponent,
    SafeUrlPipe,
    MapComponent,
    BrochureComponent
  ],
  imports: [  
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
