import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-juridico',
  standalone: true,
  imports: [],
  templateUrl: './juridico.component.html',
  styleUrl: './juridico.component.scss'
})

export class JuridicoComponent implements OnInit {
  ngOnInit(): void {
    // Inicializar AOS
    AOS.init({
      duration: 1200, // Duración de animación en ms
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
}
