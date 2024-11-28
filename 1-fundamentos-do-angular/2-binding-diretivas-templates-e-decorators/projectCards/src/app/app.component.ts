import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';

  cardPlanType = 'Simples';
  cardPlanPrice = 100;

  handlePlanType(planType: string){
    this.cardPlanType = planType;
  }
}
