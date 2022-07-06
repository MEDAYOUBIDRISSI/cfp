import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComComponent } from './first-com/first-com.component';
import { SecondComComponent } from './second-com/second-com.component';
import {HttpClientModule} from '@angular/common/http';
import { TestServiceService } from './first-com/test-service.service';



@NgModule({
  declarations: [
    AppComponent,
    FirstComComponent,
    SecondComComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
