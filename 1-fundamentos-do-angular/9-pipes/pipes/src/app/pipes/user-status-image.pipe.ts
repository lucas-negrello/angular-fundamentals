import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userStatusImage'
})
export class UserStatusImagePipe implements PipeTransform {

  transform(userStatus:number): string {
    const statusImages: { [key: number]: string } = {
      1: '/icons/active-user-icon.png',
      2: '/icons/inactive-user-icon.png',
    };
    return statusImages[userStatus];
  }

}
