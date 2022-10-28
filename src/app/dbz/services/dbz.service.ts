import { Injectable } from "@angular/core";

import { Personaje } from '../interfaces/dbz.interfaces'

@Injectable()
export class DbzService {




    private _personajes: Personaje[] = [{
        nombre: 'Goku',
        poder: 15000
    },
    {
        nombre: 'Vegeta',
        poder: 7500
    }
    ];

    nuevo: Personaje = {
        nombre: '',
        poder: 0
    }

    public get personajes(): Personaje[] {
        //return this._personajes;
        return [...this._personajes];
    }

    agregarPersonaje(perosonaje: Personaje) {
        this._personajes.push(perosonaje);
    }

}