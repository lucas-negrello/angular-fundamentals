import { Component } from '@angular/core';
import {NationalitiesService} from "../../services/nationalities.service";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  private _car: string = '';
  private _nationality: string = '';
  protected nationalityNames: {id: any, name: string}[] = [];
  get car(): string {
    return this._car;
  }
  set car(value: string) {
    this._car = value;
  }
  get nationality(): string {
    return this._nationality;
  }
  set nationality(value: string) {
    this._nationality = value;
  }

  constructor(private _nationalitiesService: NationalitiesService) {
    this._nationalitiesService.getAllNacionalitiesNames().subscribe(
      names => {
        names.forEach((name, index) => {
          if(index <= 10){
            this.nationalityNames.push(
              {
                id: this.transformToSnakeCase(name),
                name: name
              }
            );
          }
        })
      }
    )
  }
  carRefactor(car: string): void {
    this.car = this.captalize(car);
  }

  nationalityRefactor(nationality: string): void {
    this.nationality = nationality
  }

  captalize(text: string):string {
    if(!text) return text;
    return text[0].toUpperCase()+text.substring(1).toLowerCase();
  }
  transformToSnakeCase(name: string): string {
    return name
      .toLowerCase()
      .replace(/\s+/g, '_');
  }
  transformFromSnakeCase(name: string): string {
    return name
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

}
