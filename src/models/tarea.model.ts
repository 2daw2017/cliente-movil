export class Tarea {
    empresa: string;
    direccion: string;
    telefono: string;
    averia: string;
    id: string;
    constructor(empresa: string, direccion: string, telefono: string, averia: string, id: string) {
        this.averia = averia;
        this.direccion = direccion;
        this.empresa = empresa;
        this.id = id;
        this.telefono = telefono;
    }
}