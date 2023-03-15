import { Component, DoCheck  } from '@angular/core';

// Interface
import { TodoList } from '../../model/todo-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements DoCheck {
 
  public ListaDeTarefas: Array<TodoList> = JSON.parse(localStorage.getItem("lista") || '[]')
  
  ngDoCheck() {
    this.setLocalStorage()
  }

  public ReceberDados(event: string){
    this.ListaDeTarefas.push({Tarefa: event, Checked: false})
  }

 
  public deletarItem (value: number){
    return this.ListaDeTarefas.splice(value,1)
  }

  public deletarAll(){
    const confirm = window.confirm('Tem certeza deseja deletar tudo ?')
    if (confirm) {
      this.ListaDeTarefas = []
    } 
  }

  public validationInput(event: string, index: number){
    if (!event.length){
      const confirm = window.confirm("A tarefa está vazia, deseja deletar ?")
      if(confirm){
        this.deletarItem(index)
      }  
    }
  }

  public setLocalStorage() {
    if (this.ListaDeTarefas) {
      this.ListaDeTarefas.sort((first, last) => Number(first.Checked) - Number(last.Checked));
      localStorage.setItem('lista', JSON.stringify(this.ListaDeTarefas));
    }
  }
}


