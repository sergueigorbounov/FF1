import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent,
    // Import HttpClientModule for HTTP functionality
  ],
  providers: [],
  // Bootstrap the AppComponent
})
export class AppModule { }
