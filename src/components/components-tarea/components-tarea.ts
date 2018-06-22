import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea.model';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { TasksService } from '../../providers/task.service';
@Component({
  selector: 'components-tarea',
  templateUrl: 'components-tarea.html'
})
export class ComponentsTareaComponent implements OnInit {
  @Input() tarea: Tarea;
  @Input() mostrar: boolean;
  color: string;
  constructor(
    private launchNavigator: LaunchNavigator,
    private taskService: TasksService
  ) {
  }
  ngOnInit() {
    this.color = this.asignarColor();
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
  private completarTarea() {
    this.taskService.getStatustype().then(types => {
      let cont = true;
      let j = 0;
      while (cont) {
        if (types[j]['name'] === 'Finalizada') {
          this.taskService.setTaskStatus(this.tarea.id, types[j]['id']).then(response => {
          });
          cont = false;
        } j++;
      }
    });
  }
  private verMapa() {
    var app = this.launchNavigator.APP.GOOGLE_MAPS;
    this.launchNavigator.navigate(this.tarea.direccion, {
      app: app
    });
  }
}
