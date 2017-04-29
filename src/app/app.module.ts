// system
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// thirdparty
import { MaterializeModule } from "angular2-materialize";

// services
import { TidelevelDataService } from './shared/tidelevel-data.service';

// components
import { AppComponent } from './app.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { LogoComponent } from './mainheader/logo/logo.component';


@NgModule({
  declarations: [
    AppComponent,
    MainheaderComponent,
    LogoComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TidelevelDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
