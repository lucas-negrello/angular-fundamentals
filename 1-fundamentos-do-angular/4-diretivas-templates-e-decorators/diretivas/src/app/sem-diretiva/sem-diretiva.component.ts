import { Component } from '@angular/core';

@Component({
  selector: 'app-sem-diretiva',
  templateUrl: './sem-diretiva.component.html',
  styleUrl: './sem-diretiva.component.scss'
})
export class SemDiretivaComponent {

  addBgColor: boolean = false;

  onMouseOver(){
    this.addBgColor = true;
  }

  onMouseOut(){
    this.addBgColor = false;
  }

}
