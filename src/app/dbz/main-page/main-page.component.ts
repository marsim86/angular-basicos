import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';


import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  

  constructor(private dbzService: DbzService) {

  }

  agregarNuevoPersonaje(argumento: Personaje) {
    //this.personajes.push({ nombre: this.nuevo.nombre.trim(), poder: this.nuevo.poder });
  }
}
