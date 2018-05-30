import { Component, OnInit } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { MensajeriaPage, TareasPage, MainPage, SignupPage } from '../pages/export';
@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  rootPage: any = SignupPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private geolocation: Geolocation,
    public toastCtrl: ToastController
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }
  ngOnInit() {
    this.mandarUbicacion();
  }
  private mandarUbicacion() {
    setInterval(() => {
      console.log('posicion')
      this.geolocation.getCurrentPosition().then((resp) => {
        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
        this.presentToast(`latitud: ${resp.coords.latitude} longitud: ${resp.coords.longitude}`);
      }).catch((error) => {
        console.log('Error getting location', error);
        this.presentToast(`Error perdida de señal: ${error}`)
      });
    }, 10000);
  }
  private presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}

