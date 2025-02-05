import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Repositorio de Enlaces';

  // Propiedad del enlace actual
  enlace = {
    id: 0,
    nombre: '',
    link: ''
  };

  // Lista de enlaces predefinidos
  enlaces = [
    { id: 1, nombre: 'Ejemplo 1', link: 'https://ejemplo1-omega.vercel.app/' },
    { id: 2, nombre: 'Ejemplo 2', link: 'https://ejemplo-2.vercel.app/' },
    { id: 3, nombre: 'Ejemplo 3', link: 'https://ejemplo-3.vercel.app/' },
    { id: 4, nombre: 'Ejemplo 4', link: 'https://ejemplo-4.vercel.app/' },
    { id: 5, nombre: 'Ejemplo 5', link: 'https://ejemplo-5.vercel.app/' },
    { id: 6, nombre: 'Evaluacion Primer Parcial', link: 'https://evaluacion-dwp-1parcial.vercel.app/' },
  ];

  // Función para agregar un enlace
  agregarEnlace() {
    if (this.enlace.id == 0) {
      alert('El ID debe ser diferente de cero');
      return;
    }

    // Verificar que el ID no se repita
    for (let i = 0; i < this.enlaces.length; i++) {
      if (this.enlace.id == this.enlaces[i].id) {
        alert('Ya existe un enlace con ese ID');
        return;
      }
    }

    // Agregar el enlace al array
    this.enlaces.push({
      id: this.enlace.id,
      nombre: this.enlace.nombre,
      link: this.enlace.link
    });

    // Reiniciar el formulario
    this.enlace.id = 0;
    this.enlace.nombre = '';
    this.enlace.link = '';
  }

  // Función para seleccionar un enlace
  seleccionarEnlace(enlaceSeleccionado: { id: number; nombre: string; link: string }) {
    this.enlace.id = enlaceSeleccionado.id;
    this.enlace.nombre = enlaceSeleccionado.nombre;
    this.enlace.link = enlaceSeleccionado.link;
  }

  // Función para modificar un enlace
  modificarEnlace() {
    for (let i = 0; i < this.enlaces.length; i++) {
      if (this.enlace.id == this.enlaces[i].id) {
        this.enlaces[i].nombre = this.enlace.nombre;
        this.enlaces[i].link = this.enlace.link;

        // Reiniciar formulario
        this.enlace.id = 0;
        this.enlace.nombre = '';
        this.enlace.link = '';
        return;
      }
    }
    alert('No existe ese ID');
  }

  // Función para eliminar un enlace
  eliminarEnlace(id: number) {
    for (let i = 0; i < this.enlaces.length; i++) {
      if (id == this.enlaces[i].id) {
        this.enlaces.splice(i, 1);
        return;
      }
    }
  }
}
