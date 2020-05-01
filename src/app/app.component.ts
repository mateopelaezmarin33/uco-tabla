import { Component, OnInit } from '@angular/core';
import { Estudiante } from './class/estudiante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tabla';

  estudiantes = new Array<Estudiante>();
  ngOnInit() {
    this.buildEstudiantes();
  }
  names = new Array("Guillermo", "Lucas", "David", "Roger", "Bruno", "Iñaki", "Alex", "Carlos");
  lastnames = new Array("rios", "Lucas", "castaño", "parra", "Bruno", "Iñaki", "Alex", "Carlos");

  buildEstudiantes() {
    this.estudiantes.push(new Estudiante(1, this.getAleatorio(this.names), this.getAleatorio(this.lastnames), this.getAleatorioNumber(0, 5)));
    this.estudiantes.push(new Estudiante(2, this.getAleatorio(this.names), this.getAleatorio(this.lastnames),  this.getAleatorioNumber(0, 5)));
    this.estudiantes.push(new Estudiante(3, this.getAleatorio(this.names), this.getAleatorio(this.lastnames), this.getAleatorioNumber(0, 5)));
    this.estudiantes.push(new Estudiante(4, this.getAleatorio(this.names), this.getAleatorio(this.lastnames), this.getAleatorioNumber(0, 5)));
    this.estudiantes.push(new Estudiante(5, this.getAleatorio(this.names), this.getAleatorio(this.lastnames), this.getAleatorioNumber(0, 5)));
    this.estudiantes.push(new Estudiante(6, this.getAleatorio(this.names), this.getAleatorio(this.lastnames), this.getAleatorioNumber(0, 5)));
    this.estudiantes.push(new Estudiante(7, this.getAleatorio(this.names), this.getAleatorio(this.lastnames), this.getAleatorioNumber(0, 5)));
    this.estudiantes.push(new Estudiante(8, this.getAleatorio(this.names), this.getAleatorio(this.lastnames), this.getAleatorioNumber(0, 5)));
    this.estudiantes.push(new Estudiante(9, this.getAleatorio(this.names), this.getAleatorio(this.lastnames), this.getAleatorioNumber(0, 5)));
    this.estudiantes.push(new Estudiante(10, this.getAleatorio(this.names), this.getAleatorio(this.lastnames), this.getAleatorioNumber(0, 5)));
    this.estudiantes.push(new Estudiante(5, this.getAleatorio(this.names), this.getAleatorio(this.lastnames), this.getAleatorioNumber(0, 5)));
    this.estudiantes.push(new Estudiante(6, this.getAleatorio(this.names), this.getAleatorio(this.lastnames), this.getAleatorioNumber(0, 5)));
    this.estudiantes.push(new Estudiante(7, this.getAleatorio(this.names), this.getAleatorio(this.lastnames), this.getAleatorioNumber(0, 5)));
    this.estudiantes.push(new Estudiante(8, this.getAleatorio(this.names), this.getAleatorio(this.lastnames), this.getAleatorioNumber(0, 5)));
    this.estudiantes.push(new Estudiante(9, this.getAleatorio(this.names), this.getAleatorio(this.lastnames), this.getAleatorioNumber(0, 5)));
    this.estudiantes.push(new Estudiante(10, this.getAleatorio(this.names), this.getAleatorio(this.lastnames), this.getAleatorioNumber(0, 5)));
    this.estudiantes.push(new Estudiante(5, this.getAleatorio(this.names), this.getAleatorio(this.lastnames), this.getAleatorioNumber(0, 5)));
    this.estudiantes.push(new Estudiante(6, this.getAleatorio(this.names), this.getAleatorio(this.lastnames), this.getAleatorioNumber(0, 5)));
    this.estudiantes.push(new Estudiante(7, this.getAleatorio(this.names), this.getAleatorio(this.lastnames), this.getAleatorioNumber(0, 5)));
    this.estudiantes.push(new Estudiante(8, this.getAleatorio(this.names), this.getAleatorio(this.lastnames), this.getAleatorioNumber(0, 5)));
    this.estudiantes.push(new Estudiante(9, this.getAleatorio(this.names), this.getAleatorio(this.lastnames), this.getAleatorioNumber(0, 5)));
    this.estudiantes.push(new Estudiante(10, this.getAleatorio(this.names), this.getAleatorio(this.lastnames), this.getAleatorioNumber(0, 5)));
  }

  getAleatorio(list: Array<any>): string{
     const aleatorio = Math.floor(Math.random() * (list.length));
     return list[aleatorio];
  }

  getAleatorioNumber(rangeIni: number, rangeFIn: number): number{
    const qualification = (Math.random() * (rangeIni - rangeFIn) + rangeFIn).toFixed(2);
    return + qualification;
 }
}
