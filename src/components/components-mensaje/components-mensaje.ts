import { Component, Input, OnInit } from '@angular/core';
import { Mensaje } from '../../models/mensaje.model';
@Component({
  selector: 'components-mensaje',
  templateUrl: 'components-mensaje.html'
})
export class ComponentsMensajeComponent implements OnInit {
  @Input() mensaje: Mensaje;
  user: string = 'Jane';
  text: string;
  date: string;
  autor: string;
  derecha: boolean;
  constructor() {

  }
  ngOnInit() {
    console.log(this.mensaje);
    this.text = this.mensaje.texto;
    this.autor = this.mensaje.autor;
    this.date = this.mensaje.fecha;
    this.derecha = this.asginarPosicionTxt();
  }

  asginarPosicionTxt() {
    let pos = (this.autor != this.user) ? true : false;
    return (pos);
  }
}
