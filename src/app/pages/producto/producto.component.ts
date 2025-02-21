import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as AOS from 'aos';
import { Router } from '@angular/router';
import { Producto, PRODUCTOS } from '../../models/producto.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-producto',
  standalone: true,
  templateUrl: './producto.component.html',
  imports: [CommonModule],
  styleUrl: './producto.component.scss'
})
export class ProductoComponent implements OnInit {
  id!: number;
  producto!: Producto | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    AOS.init();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = PRODUCTOS.find(p => p.id === id); // Buscamos el producto por ID
  }

  volverAlInicio() {
    this.router.navigate(['/home']);
  }
}