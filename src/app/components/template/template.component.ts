import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [ ]
})
export class TemplateComponent {

  usuario: Usuario = {
    nombre: null,
    apellido: null,
    email: null,
    pais: '',
    sexo: '',
    terminos: false
  }

  sexos: string[] = ["Hombre", "Mujer", "Otro"]

  paises = [
    {codigo: "CL",
    nombre: "Chile"},
    {codigo: "CO",
    nombre: "Colombia"},
    {codigo: "VE",
    nombre: "Venezuela"}]

  constructor() { }



  guardar(forma: NgForm ) {
    console.log(forma)
    console.log(forma.value)
    console.log(this.usuario)
  }

}
