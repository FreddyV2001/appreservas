// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // Propiedades y otros métodos pueden ir aquí

  login(): void {
    // Lógica de inicio de sesión
    console.log('Bienvenido'); 
  }
}
