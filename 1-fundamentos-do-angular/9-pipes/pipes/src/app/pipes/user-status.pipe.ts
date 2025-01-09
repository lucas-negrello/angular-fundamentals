import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
  name: "userStatus",
  pure: true
})
export class UserStatusPipe implements PipeTransform {
  transform(userStatus: number): string {
    try {
      if(userStatus !== 1 && userStatus !== 2) {
        throw new Error('Status deve ser 1 ou 2, o parametro passado foi: ' + userStatus);
      }
      const status: { [key: string]: string } = {
        1: 'Ativo',
        2: 'Inativo',
      }
      return status[userStatus];
    }
    catch (error: any) {
      console.error(error.message);
      return 'Status Inválido';
    }
  }
}
