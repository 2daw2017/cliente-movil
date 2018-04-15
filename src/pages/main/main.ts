import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MensajeriaPage, TareasPage } from '../export';



import { Tarea } from '../../models/tarea.model';
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  mapa: boolean = false;
  nombre = 'Rafa';
  apellido = 'Martínez Espartero';
  horario = '09:00-15:00 16:00-18:00';
  tareas: Tarea[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    ) {
    this.tareas.push(new Tarea('Avengoa', 'Av Mortalaxa', '62478916', 'Fallo general', '4'));
    this.tareas.push(new Tarea('Avengoa', 'Av Mortalaxa', '62478916', 'Fallo general', '4'));
    this.tareas.push(new Tarea('Avengoa', 'Av Mortalaxa', '62478916', 'Fallo general', '4'));
    this.tareas.push(new Tarea('Avengoa', 'Av Mortalaxa', '62478916', 'Fallo general', '4'));
    this.tareas.push(new Tarea('Avengoa', 'Av Mortalaxa', '62478916', 'Fallo general', '4'));
    this.tareas.push(new Tarea('Avengoa', 'Av Mortalaxa', '62478916', 'Fallo general', '4'));
    this.tareas.push(new Tarea('Avengoa', 'Av Mortalaxa', '62478916', 'Fallo general', '4'));
  }
  verMensajes() {
    this.navCtrl.push(MensajeriaPage);
  }
  verTareas() {
    this.navCtrl.push(TareasPage);
  }
}
