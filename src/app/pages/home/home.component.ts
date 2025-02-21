import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { Producto, PRODUCTOS } from '../../models/producto.model';
import { CommonModule } from '@angular/common'; // Importa CommonModule


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [CommonModule],
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  productos: Producto[] = PRODUCTOS;

  constructor(private router: Router) {}

  ngOnInit() {
    AOS.init();
  }

  verProducto(id: number) {
    this.router.navigate(['/producto', id]);
  }
}
