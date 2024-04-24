import { Component } from '@angular/core';
import {GridDisplayComponent} from "./grid-display/grid-display.component";
import {HttpClientModule} from "@angular/common/http";
import {NgClass, NgForOf} from "@angular/common";
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    GridDisplayComponent,HttpClientModule,
    NgForOf,
    NgClass,
    RouterModule.forRoot(appRoutes)
  ],
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Forest Fire Simulation 3.5';

  }










