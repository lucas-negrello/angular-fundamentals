import { Component } from '@angular/core';

export enum UserStatusEnum {
  ATIVO = 1,
  INATIVO = 2
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'pipes';

  pessoa = {
    nome: 'Jane',
    idade: 26,
    status: UserStatusEnum.ATIVO,
  }

  minhaData: string = '2024-10-21T21:00:00.000Z';
  dateData: Date = new Date(this.minhaData);
  timestampData: number = new Date(this.minhaData).getTime();
}
