export class Mensaje {
    autor: string;
    fecha: string;
    texto: string;
    constructor(autor: string, fecha: string, texto: string) {
        this.autor = autor;
        this.fecha = fecha;
        this.texto = texto;
    }
}