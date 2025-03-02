import {generarId}  from "./funciones";
import type {Cita} from './type'

// interface Cita {
//     [key:string]: string
//     id:string;
//     mascota:string;
//     propietario:string;
//     email: string;
//     fecha: string;
//     sintomas:string;
//  }

let editando = {
    value: false
}

// objeto de cita
const citaObjeto : Cita = {
    id: generarId(),
    mascota: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

export {
    editando,
    citaObjeto
};