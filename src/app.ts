import './style.css'
import {pacienteInput, propietarioInput, emailInput,fechaInput, sintomasInput, 
       formulario} from './selectores.ts'
import { datosCitas, submitCita } from './funciones.ts'

// Eventos
pacienteInput?.addEventListener('change', datosCitas);
propietarioInput?.addEventListener('change', datosCitas);
emailInput?.addEventListener('change', datosCitas);
fechaInput?.addEventListener('change', datosCitas);
sintomasInput?.addEventListener('change', datosCitas);
formulario?.addEventListener('submit', submitCita);



