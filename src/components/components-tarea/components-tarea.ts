import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea.model';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
@Component({
  selector: 'components-tarea',
  templateUrl: 'components-tarea.html'
})
export class ComponentsTareaComponent implements OnInit{
  @Input() tarea: Tarea;
  @Input() mostrar: boolean;
  color: string;
  constructor(private launchNavigator: LaunchNavigator) {
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
  private completarTarea(){
    this.tarea.completada=true;
  }
  private verMapa() {
    var app = this.launchNavigator.APP.GOOGLE_MAPS;
    this.launchNavigator.navigate("Av. de Moratalaz, 170, Madrid", {
      app: app
    });
  }
}
