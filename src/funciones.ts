import Notificacion from './clases/Notificaciones';
import { AdminCitas } from './clases/AdminCitas';
import {citaObjeto, editando} from './variables'
import { formulario, formularioInput, pacienteInput, propietarioInput, 
      emailInput, fechaInput, sintomasInput } from './selectores';

interface Cita {
    id: string;
    mascota: string;
    propietario: string;
    email: string;
    fecha: string;
    sintomas: string;
}

const citas = new AdminCitas()

export function datosCitas(e: Event){
    const target = e.target as HTMLInputElement
    citaObjeto[target.name] = target.value;
    
}

export function submitCita(e:SubmitEvent){
    e.preventDefault();
  
    
  //   const {mascota, propietario, email, fecha, sintomas} = citaObjeto;
  //   if(mascota.trim() === '' || propietario.trim() === ''
  //     || email.trim() === '' || fecha.trim() === ''
  //     || sintomas.trim() === ''){
  //     console.log('Todols los campos son obligatorios');
  //     return;
  //   }
  
  if(Object.values(citaObjeto).some(valor => valor.trim() === '')){
     new Notificacion({
      texto: 'Todos los campos son obligatorios',
      tipo: 'error'
    })
      return; 
  }
  
  if(editando.value){
     citas.editar({...citaObjeto});
     new Notificacion({
      texto: 'Guardado Correctamente',
      tipo: 'exito'
  })
  }else{
      citas.agregar({...citaObjeto});
      new Notificacion({
          texto: 'Paciente Registrado',
          tipo: 'exito'
      })
      
  }
  formulario?.reset();
  reiniciarObjetoCita();
  if(formularioInput !== null){
    formularioInput.value = 'Registrar Mascota'; 
  }
   editando.value = false;
  
  }

  export function reiniciarObjetoCita(){
    //Reiniciar el objeto
    // objeto de cita
    citaObjeto.id = generarId(),
    citaObjeto.mascota = '';
    citaObjeto.propietario = '';
    citaObjeto.email = '';
    citaObjeto.fecha = '';
    citaObjeto.sintomas = '';

    //otra forma de hacer lo mismo
    // Object.assign(citaObjeto,{
    //     id: generarId(),
    //     mascota: '',
    //     propietario: '',
    //     email: '',
    //     fecha: '',
    //     sintomas: ''
    // })
  
}
  
export function generarId(){
      return Math.random().toString(36).substring(2) + Date.now()
  }
  
export function cargarEdicion(cita : Cita){
      Object.assign(citaObjeto, cita)
  
      if(pacienteInput !== null){
        pacienteInput.value = cita.mascota;
        propietarioInput.value = cita.propietario;
        emailInput.value = cita.propietario;
        fechaInput.value = cita.fecha;
        sintomasInput.value = cita.sintomas;
    
        editando.value = true;
    
        formularioInput.value = 'Guardar Cambios'
      }
  }