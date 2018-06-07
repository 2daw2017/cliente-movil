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
  }

}

