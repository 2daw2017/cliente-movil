import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';

import { MainPage, QrscanPage } from '../export';
import { AuthService } from '../../providers/auth.service';
import { Storage } from '@ionic/storage';
import { HandshakeService } from '../../providers/handshake.service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  identity_document: string;
  password: string;
  users: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private auth: AuthService,
    private platform: Platform,
    private storage: Storage,
    private handshakeService: HandshakeService
  ) {
    this.handshakeService.handshake().then(ok => {
      if (ok) {
        this.navCtrl.push(MainPage);
      };
    });
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
            this.login();
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
  goQrScan() {
    this.navCtrl.push(QrscanPage);
  }
  login() {
    this.auth.login({ identity_document: this.identity_document, password: this.password }).then(token => {
      if (this.platform.is('cordova')) {
        this.storage.set('token', token).then(validation => {
          this.navCtrl.push(MainPage);
        });
      }
      else {
        localStorage.setItem('token', token);
        this.navCtrl.push(MainPage);
      }
    }, err => console.log(err))
  }
}
