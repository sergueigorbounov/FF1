import { Component } from '@angular/core';
import {GridDisplayComponent} from "./grid-display/grid-display.component";
import {HttpClientModule} from "@angular/common/http";
import {NgClass, NgForOf} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    GridDisplayComponent,HttpClientModule,  // Include HttpClientModule here
    NgForOf,
    NgClass

  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Forest Fire Simulation 3.5';

  }



