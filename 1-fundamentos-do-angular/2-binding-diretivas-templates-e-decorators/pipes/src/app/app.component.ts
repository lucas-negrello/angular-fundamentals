import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pipes';
  text = 'Lucas';
  object = {
    name: 'Nome',
    age: 25
  };

  pessoa1 = {
    nome: 'Lucas',
    status: 1
  };

  pessoa2 = {
    nome: 'Joao',
    status: 2
  }

  pessoa3 = {
    nome: 'Maria',
    status: 3
  }

}
