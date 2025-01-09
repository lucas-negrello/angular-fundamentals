import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], searchProp: any, searchValue: any): any[] {
    try {
      if(list.length === 0 || !searchValue) {
        return list;
      }
      if(typeof searchValue === 'string' && typeof searchProp === 'string') {
        return list.filter(item => item[searchProp].toLowerCase().includes(searchValue.toLowerCase()));
      }
      if(typeof searchValue === typeof searchProp) {
        return list.filter(item => item[searchProp].includes(searchValue));
      }
      throw new Error('searchProp and searchValue must be same type');
    }
    catch (error: any) {
      console.error('Erro: ' + error.message.toString());
      return list;
    }
  }

}
