import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent implements OnInit{
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

  sendWhatsApp() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value || 'Sin especificar';
    const phone = (document.getElementById('phone') as HTMLInputElement).value || 'Sin especificar';
    const reason = (document.getElementById('reason') as HTMLInputElement).value || 'Sin especificar';
    const message = (document.getElementById('message') as HTMLTextAreaElement).value || 'Sin mensaje';

    if (!name || !email) {
      alert('Por favor, complete los campos obligatorios.');
      return;
    }

    const url = `https://wa.me/5491162485451?text=
      Hola, mi nombre es ${encodeURIComponent(name)}.
      
      Email: ${encodeURIComponent(email)}.
      
      Empresa: ${encodeURIComponent(company)}.
      
      Teléfono: ${encodeURIComponent(phone)}.
      
      Motivo: ${encodeURIComponent(reason)}.
      
      Mensaje: ${encodeURIComponent(message)}.`;

      
    window.open(url, '_blank');
  }

}