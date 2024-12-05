import {Component, EventEmitter, Output} from '@angular/core';
import {IFilterOptions} from "../../interfaces/filter-options.interface";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  @Output('onFilter') onFilterEmit = new EventEmitter<IFilterOptions>();

  filterOptions: IFilterOptions = {
    name: null,
    startDate: null,
    endDate: null,
    status: null,
  }

  statusList = [
    {desciption: 'Ativo', value: true},
    {desciption: 'Inativo', value: false},
  ]

  onFilter(){
    this.onFilterEmit.emit(this.filterOptions);
  }

}
