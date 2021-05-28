import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonService } from './common.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, DisplayComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [CommonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
