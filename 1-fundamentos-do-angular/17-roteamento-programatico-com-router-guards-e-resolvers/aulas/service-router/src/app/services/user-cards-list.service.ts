import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ICard {
  id: number;
  numero: string;
  titular: string;
  validade: string;
  cvv: string;
  tipo: 'debito' | 'credito';
}

export type CardsList = ICard[];

@Injectable({
  providedIn: 'root'
})
export class UserCardsListService {
  private readonly cards: CardsList = [
    {
      id: 0,
      numero: '1234 5678 9012 3456',
      titular: 'João da Silva',
      validade: '12/24',
      cvv: '123',
      tipo: 'debito',
    },
    {
      id: 1,
      numero: '9876 5432 1098 7654',
      titular: 'João da Silva',
      validade: '11/23',
      cvv: '456',
      tipo: 'credito',
    },
    {
      id: 3,
      numero: '4567 8901 2345 6789',
      titular: 'João da Silva',
      validade: '10/25',
      cvv: '789',
      tipo: 'debito',
    }
  ];

  getUserCardsByType(type: 'debito' | 'credito'): Observable<CardsList> {
    const card = this.cards.filter(card => card.tipo === type);

    return of(card);
  }

  getUserCardById(id: number): Observable<ICard | undefined> {
    const card = this.cards.find(card => card.id === id);

    return of(card);
  }
}
