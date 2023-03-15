import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Page
import { HomeComponent } from './pages/home/home.component';

// Components
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { InputAddItensComponent } from './components/input-add-itens/input-add-itens.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonDeleteAllComponent } from './components/button-delete-all/button-delete-all.component';

@NgModule({
  declarations: [
    HomeComponent,
    TodoListComponent,
    InputAddItensComponent,
    HeaderComponent,
    ButtonDeleteAllComponent,
  ],
  
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class HomeModule { }
