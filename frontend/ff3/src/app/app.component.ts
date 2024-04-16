import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GridDisplayComponent} from "./grid-display/grid-display.component";
import { HttpClientModule } from '@angular/common/http';
import {Observable} from "rxjs";
import { SimulationService } from './simulation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , GridDisplayComponent, HttpClientModule],
  providers: [SimulationService, Observable],
  template: `
    <h1>{{ title }}</h1>
    <app-grid-display></app-grid-display>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Forest Fire Simulation 3.0';
}
