import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  isHidden: boolean = false
  
  open() {
    this.isHidden = !this.isHidden
  }
}
