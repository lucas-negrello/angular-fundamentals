import { Component } from '@angular/core';
import {DebitComponent} from "../debit/debit.component";
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {map} from "rxjs";

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [
    DebitComponent,
    RouterOutlet
  ],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent {

  isWalletBlocked: boolean = false;

  constructor(private readonly _router: Router, private readonly _route: ActivatedRoute) {
  }

  navigate(path: string){
    this._router.navigate([path], {relativeTo: this._route}).then(success => {
      const actualPath = this._route.children.map(
        child => {
          return child.firstChild?.snapshot.url[0].path;
        });
      if(path === actualPath[0] || success){
        this.isWalletBlocked = false;
      }else{
        this._router.navigate(['/dashboard/payments']);
        this.isWalletBlocked = true;
      }
    });
  }

}
