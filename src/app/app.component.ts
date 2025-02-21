import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, NavbarComponent], // Agregar NavbarComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'protego-y-asociados-app';
}