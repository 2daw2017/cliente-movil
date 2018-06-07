import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MensajeriaPage, TareasPage } from '../export';
import { Tarea } from '../../models/tarea.model';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationService } from '../../providers/location.service';

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
    private locationService: LocationService,
    private geolocation: Geolocation,
    public toastCtrl: ToastController
  ) {
    this.tareas.push(new Tarea('Avengoa', 'Av Mortalaxa', '62478916', 'Fallo general', '4'));
    this.tareas.push(new Tarea('Avengoa', 'Av Mortalaxa', '62478916', 'Fallo general', '4'));
    this.tareas.push(new Tarea('Avengoa', 'Av Mortalaxa', '62478916', 'Fallo general', '4'));
    this.tareas.push(new Tarea('Avengoa', 'Av Mortalaxa', '62478916', 'Fallo general', '4'));
    this.tareas.push(new Tarea('Avengoa', 'Av Mortalaxa', '62478916', 'Fallo general', '4'));
    this.tareas.push(new Tarea('Avengoa', 'Av Mortalaxa', '62478916', 'Fallo general', '4'));
    this.tareas.push(new Tarea('Avengoa', 'Av Mortalaxa', '62478916', 'Fallo general', '4'));
    this.mandarUbicacion();
  }
  ngOnInit() {
    this.mandarUbicacion();
  }
  verMensajes() {
    this.navCtrl.push(MensajeriaPage);
  }
  verTareas() {
    this.navCtrl.push(TareasPage);
  }
  private mandarUbicacion() {
    setInterval(() => {
      console.log('posicion')
      this.geolocation.getCurrentPosition().then((resp) => {
        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
        this.locationService.addLocation(resp.coords.longitude, resp.coords.latitude)
      .then(coords => {this.presentToast(coords);
        console.log(coords);
      }, err => this.presentToast(`error ${JSON.stringify(err)}`));
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
