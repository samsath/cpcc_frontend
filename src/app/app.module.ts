// system
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// thirdparty
import { MaterializeModule } from 'angular2-materialize';
import { LazyLoadImageModule } from 'ng-lazyload-image';

// services
import { TidelevelDataService } from './shared/tidelevel-data.service';

// components
import { AppComponent } from './app.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { LogoComponent } from './mainheader/logo/logo.component';
import { MainimageComponent } from './mainimage/mainimage.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { NextSessionComponent } from './next-session/next-session.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ArticleslistComponent } from './articles/articleslist/articleslist.component';
import { ArticlesdetailComponent } from './articles/articlesdetail/articlesdetail.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { SquareItemComponent } from './square-item/square-item.component';
import { FaqpageComponent } from './faqpage/faqpage.component';
import { OrderbyPipe } from './orderby.pipe';
import { SessionComponent } from './session/session.component';


const appRoutes: Routes = [
  { path:'', component:HomepageComponent },
  { path:'about', component:AboutpageComponent},
  { path:'enquiry', component:EnquiryComponent },
  { path:'faq', component:FaqpageComponent },
  { path:'article', component:ArticleslistComponent},
  { path:'article/:slug', component:ArticlesdetailComponent},
  { path:'session', component:SessionComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    MainheaderComponent,
    LogoComponent,
    MainimageComponent,
    ContentAreaComponent,
    NextSessionComponent,
    SafeHtmlPipe,
    AboutpageComponent,
    HomepageComponent,
    ArticleslistComponent,
    ArticlesdetailComponent,
    EnquiryComponent,
    SquareItemComponent,
    FaqpageComponent,
    OrderbyPipe,
    SessionComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MaterializeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    LazyLoadImageModule
  ],
  providers: [
    TidelevelDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
