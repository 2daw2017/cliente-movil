import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { MainPage, QrscanPage } from '../export';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  showAlert() {
    let confirm = this.alertCtrl.create({
      title: 'Atención',
      message: 'Esta aplicación rastreará tu posición durante tu horario laboral y accederá a tu dispositivo',
      buttons: [
        {
          text: 'Acepto',
          handler: () => {
            this.navCtrl.push(MainPage);
          }
        },
        {
          text: 'No acepto',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  goQrScan(){
    this.navCtrl.push(QrscanPage);
  }
}
