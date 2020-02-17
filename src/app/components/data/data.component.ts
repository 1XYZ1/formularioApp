import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators, FormArray } from "@angular/forms";
import { Usuario } from "../../interfaces/usuario";
import { Observable } from "rxjs";

@Component({
  selector: "app-data",
  templateUrl: "./data.component.html",
  styles: []
})
export class DataComponent {
  forma: FormGroup;

  usuario: Object = {
    nombrecompleto: {
      nombre: "",
      apellido: ""
    },
    email: ""
    // pasatiempos: ['Correr', 'Dormir', "Soñar"]
  };

  constructor() {
    // console.log(this.usuario)
    this.forma = new FormGroup({
      nombrecompleto: new FormGroup({
        nombre: new FormControl("", [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellido: new FormControl("", [
          Validators.required,
          Validators.minLength(3)
        ])
      }),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
      ]),
      pasatiempos: new FormArray([
        new FormControl("dormir", Validators.required)
      ]),
      username: new FormControl("", Validators.required, this.existeUsuario),
      password1: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ]),
      password2: new FormControl()
    });
    this.forma
      .get("password2")
      .setValidators([
        Validators.required,
        Validators.minLength(6),
        this.noIguales.bind(this.forma)
      ]);
    // this.forma.setValue(this.usuario)

    // this.forma.valueChanges.subscribe(data => {
    //   console.log(data);
    // });

    this.forma.get("username").valueChanges.subscribe(data => {
      console.log(data);
    });
    this.forma.get("username").statusChanges.subscribe(data => {
      console.log(data);
    });
  }

  // noHernandez(control: FormControl): { [s: string]: boolean } {
  //   if (control.value === "hernandez") {
  //     return {
  //       nohernandez: true
  //     };
  //   }
  //   return null;
  // }

  noIguales(control: FormControl): { [s: string]: boolean } {
    let forma: any = this;
    if (control.value !== forma.get("password1").value) {
      return {
        noiguales: true
      };
    }
    return null;
  }

  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
    let promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "xyz") {
          resolve({ existe: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promesa;
  }

  agregar() {
    (<FormArray>this.forma.get("pasatiempos")).push(new FormControl("si"));
  }

  agregarPasatiempo() {}

  guardarCambios() {
    console.log(this.forma);
    console.log(this.forma.value);
    //  this.forma.controls['pasatiempos'].reset('0')
    // this.forma.reset(this.usuario);
  }
}
