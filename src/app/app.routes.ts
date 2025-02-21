import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { SeguridadEHigieneComponent } from './pages/seguridad-ehigiene/seguridad-ehigiene.component';
import { JuridicoComponent } from './pages/juridico/juridico.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductoComponent } from './pages/producto/producto.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'seguridad-e-higiene', component: SeguridadEHigieneComponent },
  { path: 'juridico', component: JuridicoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'producto/:id', component: ProductoComponent }, // Agregamos :id aquí
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
