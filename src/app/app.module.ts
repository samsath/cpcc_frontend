// system
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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


@NgModule({
  declarations: [
    AppComponent,
    MainheaderComponent,
    LogoComponent,
    MainimageComponent,
    ContentAreaComponent,
    NextSessionComponent
  ],
  imports: [
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
