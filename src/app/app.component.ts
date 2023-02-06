import { Component, Input, Output } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de empleados';

  cuadroNombre: String = "";
  cuadroApellido: String = "";
  cuadroCargo: String = "";
  cuadroSalario: number = 0;

  empleados: Empleado[] = [
    new Empleado("Jhon", "Acevedo", "Desarrollador", 50000),
    new Empleado("Ana", "Vega", "Ingeniera", 5000),
    new Empleado("Boris", "Murillo", "Desarrollador", 4000),
    new Empleado("Anderson", "Acevedo", "Ingeniero", 55000)
  ];

  empleadoAgregado(empleado: Empleado) {
    this.empleados.push(empleado);
  }
  
  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }
}