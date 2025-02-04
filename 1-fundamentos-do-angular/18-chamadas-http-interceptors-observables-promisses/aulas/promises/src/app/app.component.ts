import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PromisesComponent} from "./components/promises/promises.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PromisesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'promises';
}
