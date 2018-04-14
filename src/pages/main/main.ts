import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  nombre = 'Rafa';
  apellido = 'Martínez Espartero';
  horario = '09:00-15:00 16:00-18:00';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
