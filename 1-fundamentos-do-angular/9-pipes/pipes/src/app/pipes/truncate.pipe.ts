import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
    transform(text: string, maxLength: number): string {
      if (!text) {
        return '';
      }
      if (text.length <= maxLength) {
        return text;
      }
      return `${text.slice(0, maxLength)}...`;
    }
}
