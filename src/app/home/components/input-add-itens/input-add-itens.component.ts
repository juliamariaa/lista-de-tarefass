import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-add-itens',
  templateUrl: './input-add-itens.component.html',
  styleUrls: ['./input-add-itens.component.scss']
})
export class InputAddItensComponent {
  @Output() public EnviarDados: any = new EventEmitter()

  public tarefas: string = ""

  public EnviandoDados(){
    this.tarefas = this.tarefas.trim()
    if(this.tarefas){
      this.EnviarDados.emit(this.tarefas)
      this.tarefas = ""
    }  
}

}
