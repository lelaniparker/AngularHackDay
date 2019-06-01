import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoArray=[];
  title = 'my-app';
  addTodo(value){    
    this.todoArray.push(value);    
    console.log(this.todoArray)  } 
};