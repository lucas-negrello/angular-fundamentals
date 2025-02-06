import {Component, inject} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {UpdateUserService} from "../../services/update-user.service";
import {CreateUserService} from "../../services/create-user.service";
import {HttpErrorResponse} from "@angular/common/http";
import {IUserRequest} from "../../interfaces/user-request.interface";
@Component({
  selector: 'app-user-infos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-infos.component.html',
  styleUrl: './user-infos.component.scss'
})
export class UserInfosComponent {
  private readonly _updateUserService: UpdateUserService = inject(UpdateUserService);
  private readonly _createUserService: CreateUserService = inject(CreateUserService);

  userInfosForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  updateUser() {
    this._updateUserService.updateUser(this.userInfosForm.value as IUserRequest).subscribe({
      next: () => {
        this.userInfosForm.setErrors({ 'update-success': true })
      },
      error: (error) => {
        this.userInfosForm.setErrors({ 'update-error': true })
      },
    })
  }

  createUser() {
    this._createUserService.createUser(this.userInfosForm.value as IUserRequest).subscribe({
      next: () => {
        this.userInfosForm.setErrors({ 'create-user-success': true });
      },
      error: (error: HttpErrorResponse) => {
        if(error.status === 409) {
          return this.userInfosForm.setErrors({ 'existing-user-error': true });
        }
        this.userInfosForm.setErrors({ 'create-user-error': true })

      }
    })
  }
}
