import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MensajeriaPage, TareasPage } from '../export';


import { LaunchNavigator } from '@ionic-native/launch-navigator';
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  mapa: boolean = false;
  nombre = 'Rafa';
  apellido = 'Martínez Espartero';
  horario = '09:00-15:00 16:00-18:00';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private launchNavigator: LaunchNavigator) {
  }
  verMensajes() {
    this.navCtrl.push(MensajeriaPage);
  }
  verTareas() {
    this.navCtrl.push(TareasPage);
  }
  verMapa() {
    var app = this.launchNavigator.APP.GOOGLE_MAPS;
    this.launchNavigator.navigate("London, UK", {
      app: app
    });
  }
}
