import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  
  errandsList: string[] = [] 

  constructor() { 

    let tareasLocalStorage = JSON.parse(localStorage.getItem("tasks"));
    this.errandsList = (tareasLocalStorage != null ? tareasLocalStorage : []);
  }

  ngOnInit() {
  }

  addList() {

    let newElementOfList = (<HTMLInputElement> document.querySelector(".input_properties")).value
    this.errandsList.push(newElementOfList)
    this.guardaTareas()

  }

  deleteTask(task: string, position: number) : void{
    
    this.errandsList.splice(position, 1);
    this.guardaTareas()
  
    console.log(position)

  }

  guardaTareas() {
    localStorage.setItem("tasks",JSON.stringify(this.errandsList));
  }

}
