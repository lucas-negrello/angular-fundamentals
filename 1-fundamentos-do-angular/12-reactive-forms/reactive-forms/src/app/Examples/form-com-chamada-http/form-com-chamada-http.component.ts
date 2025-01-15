import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-com-chamada-http',
  templateUrl: './form-com-chamada-http.component.html',
  styleUrl: './form-com-chamada-http.component.scss'
})
export class FormComChamadaHttpComponent implements OnInit {
  pessoaForm!: FormGroup;

  personForm!: FormGroup;

  constructor(
    private readonly _userService: UserService
  ){}

  ngOnInit() {
    this.createPessoaForm();
    this.getUserAndFullfilPessoaForm();

    this.createPersonForm();
    this.getUserAndFullfilPersonForm();
  }

  get telefones(): FormArray {
    return this.pessoaForm.get('telefones') as FormArray;
  }

  get phoneNumbers(): FormArray {
    return this.personForm.get('phoneNumbers') as FormArray;
  }

  private createPessoaForm() {
    this.pessoaForm = new FormGroup({
      nome: new FormControl(''),
      idade: new FormControl(null),
      ativo: new FormControl(false),
      endereco: new FormGroup({
        rua: new FormControl(''),
        numero: new FormControl(null),
      }),
      telefones: new FormArray([]),
    });
  }

  private getUserAndFullfilPessoaForm() {
    this._userService.getUser().subscribe((userResponse: any) => {
      this.fullfilPessoaForm(userResponse);
    });
  }

  private fullfilPessoaForm(userResponse: any) {
    this.pessoaForm.patchValue(userResponse);
    this.telefones.clear();

    userResponse.telefones.forEach((tel: any) => {
      this.telefones.push(new FormGroup({
        numero: new FormControl(tel.numero),
        ddd: new FormControl(tel.ddd),
      }));
    });

    console.log(this.pessoaForm);
  }

  /////////////////////////////////
  //// FORM COM CONVERSÃO ////////
  ///////////////////////////////

  private createPersonForm() {
    this.personForm = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(null),
      active: new FormControl(false),
      address: new FormGroup({
        street: new FormControl(''),
        number: new FormControl(null),
      }),
      phoneNumbers: new FormArray([]),
    });
  }

  private getUserAndFullfilPersonForm() {
    this._userService.getUser().subscribe((userResponse) => {
      this.fullfilPersonForm(userResponse);
    });
  }

  private fullfilPersonForm(userResponse: any) {
    const person = {
      name: userResponse.nome,
      age: userResponse.idade,
      active: userResponse.ativo,
      address: {
        street: userResponse.endereco.rua,
        number: userResponse.endereco.numero,
      },
      phoneNumbers: [],
    };

    console.log('person', person);

    this.personForm.patchValue(person);

    userResponse.telefones.forEach((tel: any) => {
      this.phoneNumbers.push(new FormGroup({
        number: new FormControl(tel.numero),
        area: new FormControl(tel.ddd),
      }));
    });

    console.log(this.personForm);
  }
}
