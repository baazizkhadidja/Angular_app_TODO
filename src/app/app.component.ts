import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO';
  
 
   
  todos = [
  {label: 'Avancer à c++', done: false, priority:6, },
  {label: 'Avancer au projet Django GATEAU', done: false, priority:5, },
  {label: 'Pratiquer sur les observables Angular', done: false, priority:4},
  {label: 'Mettre mes projets sur Github', done: false, priority:3},
  {label: 'Faire le teste SQL', done: false, priority:2},
  {label: 'Envoyer les librables journaliers', done: true, priority:1},
  
  ];

  addTodo(newTodoLabel){
    var newTodo = {
      label: newTodoLabel,
      priority:1,
      done: false,
    };
    this.todos.push(newTodo)
  };

  deleteTodo(todo){
    this.todos = this.todos.filter(t => t.label !== todo.label );
    };

}
