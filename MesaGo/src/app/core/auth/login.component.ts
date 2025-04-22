// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    // Simula un proceso de autenticación
    if (this.username === 'admin' && this.password === '1234') {
      alert('Login exitoso');
      this.router.navigate(['/dashboard']);  // Redirigir al dashboard (cuando esté listo)
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
