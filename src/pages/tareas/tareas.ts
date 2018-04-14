import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tarea } from '../../models/tarea.model'
@IonicPage()
@Component({
  selector: 'page-tareas',
  templateUrl: 'tareas.html',
})
export class TareasPage implements OnInit{
tareas:Tarea[]=[]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tareas.push(new Tarea('Avengoa','Av Mortalaxa','62478916','Fallo general','4'));
    this.tareas.push(new Tarea('Avengoa','Av Mortalaxa','62478916','Fallo general','4'));
    this.tareas.push(new Tarea('Avengoa','Av Mortalaxa','62478916','Fallo general','4'));
    this.tareas.push(new Tarea('Avengoa','Av Mortalaxa','62478916','Fallo general','4'));
    this.tareas.push(new Tarea('Avengoa','Av Mortalaxa','62478916','Fallo general','4'));
    this.tareas.push(new Tarea('Avengoa','Av Mortalaxa','62478916','Fallo general','4'));
    this.tareas.push(new Tarea('Avengoa','Av Mortalaxa','62478916','Fallo general','4'));
  }

  ngOnInit(){

  }

}
