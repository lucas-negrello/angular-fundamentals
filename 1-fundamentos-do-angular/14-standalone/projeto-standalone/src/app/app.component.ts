import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comp1Component } from "./components/comp1/comp1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Comp1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-standalone';
}
