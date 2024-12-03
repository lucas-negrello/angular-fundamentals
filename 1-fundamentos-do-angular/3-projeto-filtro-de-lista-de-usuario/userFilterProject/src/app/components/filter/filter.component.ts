import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  statuses = [
    {value: 'teste 1', viewValue: 'teste-1'},
    {value: 'teste 2', viewValue: 'teste-2'},
    {value: 'teste 3', viewValue: 'teste-3'},
  ];

}
