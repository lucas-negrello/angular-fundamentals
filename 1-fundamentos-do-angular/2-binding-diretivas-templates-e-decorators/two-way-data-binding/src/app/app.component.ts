import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  personSelectedIndex !: number;
  listPeople = [
    {name: 'Felipe', age: 25},
    {name: 'Maria', age: 22},
    {name: 'Pedro', age: 23},
    {name: 'Antonio', age: 24},
  ];

  selectPerson(i: number){
    this.personSelectedIndex = i;
  }
}
