import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Tarea } from '../../models/tarea.model';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-tareas',
  templateUrl: 'tareas.html',
})
export class TareasPage implements OnInit {
  tareas: Tarea[] = []
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private platform: Platform,
    private storage: Storage) {

  }

  ngOnInit() {
    if (this.platform.is('cordova')) {
      this.storage.get('tareas').then((value) => {
        this.tareas = JSON.parse(value);
      });
    } else {
      this.tareas = JSON.parse(localStorage.getItem('tareas'));
    }
  }

}
