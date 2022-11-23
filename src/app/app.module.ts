import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainbannerComponent } from './mainbanner/mainbanner.component';
import { PlaybuttonComponent } from './playbutton/playbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    MainbannerComponent,
    PlaybuttonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
