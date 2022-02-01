import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxPvtButtonModule } from '@preventor/ngx-pvt-button';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxPvtButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
