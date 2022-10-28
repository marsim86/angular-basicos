import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventType } from '@angular/router';

import { Personaje } from '../interfaces/dbz.interfaces'
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {


  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  //@Output() onNuevoPersonaje = new EventEmitter<Personaje>();
  //this.onNuevoPersonaje.emit(this.nuevo);

  constructor(private dbzService: DbzService) {

  }

  agregar() {
    if (this.nuevo.nombre.trim().length == 0) {
      return;
    }

    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = { nombre: '', poder: undefined };
  }

}
