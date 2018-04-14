import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComponentsMensajeComponent } from '../../components/components-mensaje/components-mensaje'
import {Mensaje} from '../../models/mensaje.model';
@IonicPage()
@Component({
  selector: 'page-mensajeria',
  templateUrl: 'mensajeria.html',
})
export class MensajeriaPage {
  mensajes: Mensaje[]=[]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mensajes.push(new Mensaje('Julian','0','Holaaaa'));
    this.mensajes.push(new Mensaje('Jane','1','Holaaa'));
    this.mensajes.push(new Mensaje('Julian','2','que tal?'));
    this.mensajes.push(new Mensaje('Jane','3','Bien, y tu?'));
    this.mensajes.push(new Mensaje('Julian','4','Bihkljjjjjjjjjjjjjjjjjjjjjjdjkfgadlskfgdsflksdagfasldfgvdslfgdbflkdsgvfldasfcvdwelñicvadsljglkiuulkiluien'));
  }

  ionViewDidLoad() {
  }

}
