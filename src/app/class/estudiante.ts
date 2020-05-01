export class Estudiante {
    nombre: string;
    apellidos: string;
    identificacion: number;
    calificacion: number;

    constructor(identificacion: number, nombre: string, apellidos: string, calificacion: number) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.identificacion = identificacion;
        this.calificacion = calificacion;
    }
}
