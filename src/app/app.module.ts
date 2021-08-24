import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HomeBtnComponent } from './home-btn/home-btn.component';
import { PlateComponent } from './plate/plate.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    // Components, directives, and pipes go here.
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeBtnComponent,
    PlateComponent,
    MessageComponent
  ],
  imports: [
    // Modules are imported here.
    BrowserModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
