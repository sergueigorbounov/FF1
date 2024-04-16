
import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { enableProdMode } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from "rxjs";
import { SimulationService } from './app/simulation.service';
import {appConfig} from "./app/app.config";
import {GridDisplayComponent} from "./app/grid-display/grid-display.component";

import { provideHttpClient } from "@angular/common/http";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
/*bootstrapApplication(AppComponent, {
  providers: [HttpClientModule, Observable, SimulationService]
}).catch(err => console.error(err));*/

/*


// import { environment } from './environments/environment';

/!*if (environment.production) {
  enableProdMode();
}*!/

/!*bootstrapApplication(AppComponent, {
  providers: [
    HttpClientModule, Observable, SimulationService// This ensures HttpClient is available for dependency injection
    // SimulationService should be automatically provided if it has providedIn: 'root'
  ]
}).catch(err => console.error(err));*!/
// main.ts




/!*
bootstrapApplication(AppComponent, {
  providers: [HttpClientModule, Observable],
}).catch(err => console.error(err));
*!/



/!*bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(),HttpClientModule, Observable],
}).catch((err) => console.error(err));*!/



bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), HttpClientModule, Observable, SimulationService, HttpClient, AppComponent, GridDisplayComponent
  ],
}).catch((err) => console.error(err));
/!*bootstrapApplication(AppComponent, {// HttpClientModule should be in imports
  providers: [provideHttpClient(), SimulationService] // Only include services in providers
}).catch(err => console.error(err));*!/
*!/
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from "@angular/common/http";
// Assuming GridDisplayComponent is also standalone like AppComponent
import { GridDisplayComponent } from './app/grid-display/grid-display.component';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(),GridDisplayComponent],

  // If SimulationService has providedIn: 'root', you do not need to provide it here.
}).catch(err => console.error(err));
*/
