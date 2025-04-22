import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './core/auth/login.component.html',
  styleUrl: './core/auth/login.component.css'
})
export class AppComponent {
  title = 'MesaGo!';
}

