import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  list1=["Running","Playing basketball","Studying","Having meals"]
  constructor() { }

  ngOnInit(): void {
  }

}
