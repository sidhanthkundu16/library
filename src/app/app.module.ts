import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidLibraryNgModule } from 'projects/sid-library-ng/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    // SidLibraryNgModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidLibraryNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
