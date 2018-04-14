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
  color: string;
  constructor() {

  }
  ngOnInit() {
    console.log(this.mensaje);
    this.text = this.mensaje.texto;
    this.autor = this.mensaje.autor;
    this.date = this.mensaje.fecha;
    this.color = this.asignarColor();
    console.log(this.color);
  }
  asignarColor() {
    let color = (this.autor != this.user) ? 'mensaje' : 'blanco';
    console.log(color);
    return (color);
  }
}
