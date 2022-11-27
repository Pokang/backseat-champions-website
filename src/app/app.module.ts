import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainbannerComponent } from './mainbanner/mainbanner.component';
import { PlaybuttonComponent } from './playbutton/playbutton.component';
import { GamefeaturesComponent } from './gamefeatures/gamefeatures.component';
import { SteambannerComponent } from './steambanner/steambanner.component';
import { EndbannerComponent } from './endbanner/endbanner.component';
import { FooterComponent } from './footer/footer.component';
import { SlitbannersComponent } from './slitbanners/slitbanners.component';

@NgModule({
  declarations: [
    AppComponent,
    MainbannerComponent,
    PlaybuttonComponent,
    GamefeaturesComponent,
    SteambannerComponent,
    EndbannerComponent,
    FooterComponent,
    SlitbannersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
