import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss'
})
export class NosotrosComponent implements OnInit{

  ngOnInit(): void {
    AOS.init({
      duration: 1000, // Duración de las animaciones
      easing: 'ease-in-out', // Suavizado
      once: true // Ejecutar solo una vez por elemento
    });
  }

}
