import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea.model';
@Component({
  selector: 'components-tarea',
  templateUrl: 'components-tarea.html'
})
export class ComponentsTareaComponent implements OnInit{
  @Input() tarea: Tarea;
  color: string;
  constructor() {
  }
  ngOnInit(){
    this.color=this.asignarColor();
  }
  private asignarColor() {
    let color;
    let num = Math.floor(Math.random() * (3));
    switch (num) {
      case 0:
        color = 'primary';
        break;
      case 1:
        color = 'secondary';
        break;
      case 2:
        color = 'gray';
        break;
    }
    return color;
  }
}
