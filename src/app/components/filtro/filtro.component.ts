import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'ntap-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent {
  listaBotao = ["Todos", "Lido", "Não Lido"]
  @Output() filtroMudou = new EventEmitter<string>();

  dispararMudancaFiltro(filtro: any){
    this.filtroMudou.emit(filtro.srcElement.id)
  }

}
