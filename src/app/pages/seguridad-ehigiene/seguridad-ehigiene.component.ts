import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-seguridad-ehigiene',
  standalone: true,
  imports: [],
  templateUrl: './seguridad-ehigiene.component.html',
  styleUrl: './seguridad-ehigiene.component.scss'
})
export class SeguridadEHigieneComponent implements OnInit{
  ngOnInit(): void {
    // Inicializar AOS
    AOS.init({
      duration: 1200, // Duración de las animaciones en milisegundos
      easing: 'ease-in-out', // Tipo de animación
      once: true, // Si se debe ejecutar solo una vez
      mirror: false // Si se debe repetir la animación al hacer scroll hacia atrás
    });
  }
}
