import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoadingService} from "./services/loading.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly _loadingService: LoadingService = inject(LoadingService);
}
