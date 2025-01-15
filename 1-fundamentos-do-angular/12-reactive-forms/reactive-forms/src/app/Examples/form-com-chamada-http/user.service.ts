import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class UserService {
    getUser(): Observable<any> {
        return of({
            nome: 'Felipe',
            idade: 27,
            ativo: true,
            endereco: {
                rua: 'Rua Tal',
                numero: 123,
            },
            telefones: [
                {
                    numero: 11911111111,
                    ddd: 14,
                },
                {
                    numero: 11922222222,
                    ddd: 20,
                }
            ],
        });
    }
}
