import { Component } from '@angular/core';
import { Actor } from './Entidades/Actor';
import { NgForm, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form';
  userForm = new FormGroup({
    Nombre : new FormControl('', [Validators.required, Validators.maxLength(15)]),
    Apellido : new FormControl('', [Validators.required, Validators.maxLength(55)]),
    Edad : new FormControl(20, Validators.required),
    Pais : new FormControl({ value: 'Argentina', disabled: true })
  });


  constructor() {
  }

  setAllValue() {
    this.userForm.setValue({Nombre: 'Jose ', Apellido : 'Perez', Edad: '23', Pais: 'Australia' }); 
  }

  setOneValue() {
    this.userForm.patchValue({Nombre: 'Diego Sebastian '}); 
  }

  resetForm() { 
    this.userForm.reset({Nombre: '', Apellido : '', Edad: '', Pais: '' });
 } 

  onFormSubmit() {
    console.log(this.userForm);
    console.log('Nombre:' + this.userForm.get('Nombre').value);
    console.log('Apellido:' + this.userForm.get('Apellido').value);
  }
  
}
