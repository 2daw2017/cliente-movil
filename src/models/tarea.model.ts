export class Tarea {
    empresa: string;
    direccion: string;
    telefono: string;
    averia: string;
    id: string;
    completada: boolean;
    constructor(empresa: string, direccion: string, telefono: string, averia: string, id: string) {
        this.averia = averia;
        this.direccion = direccion;
        this.empresa = empresa;
        this.id = id;
        this.telefono = telefono;
        this.completada=false;
    }
}