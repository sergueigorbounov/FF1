import { bootstrapApplication } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
//import { environment } from './environments';
/*if (environment.production) {
  enableProdMode();
}*/
bootstrapApplication(AppComponent, {
  providers: [HttpClientModule, HttpClient, AppModule],
}).catch(err => console.error(err));


