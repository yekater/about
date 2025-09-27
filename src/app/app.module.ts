import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// 1. Import the corrected Routing Module
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// 2. Import all components
import { HomeComponent } from './home/home.component';
import { SongsComponent } from './songs/songs.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SongsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule // 3. MUST be here to make 'router-outlet' work!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }