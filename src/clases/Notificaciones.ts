import { formulario } from '../selectores';


type NotificacionType = {
    texto: string;
    tipo: 'error' | 'exito' | ''
}

export default class Notificacion {
    

    notificacion:NotificacionType ={
        texto:'', 
        tipo: ''  
    }

    constructor({texto,tipo}: NotificacionType){
        this.notificacion.texto = texto
        this.notificacion.tipo = tipo
        this.mostrar()

    }
    mostrar(){
        //crear notificación
        const alerta = document.createElement('div'); 
        alerta.classList.add( 'text-center', 'w-100', 'p-3', 'my-3', 'alert', 'fw-bold', 'text-uppercase', 'fs-6'
        );

        // Eliminar alertas duplicadas.
        const alertaPrevia = document.querySelector('.alert')
        alertaPrevia?.remove(); 
        // if(alertaPrevia){
        //     alertaPrevia.remove()
        // }

       // Si es de tipo error, agrega una clase
       this.notificacion.tipo === 'error' ? alerta.classList.add('alert-danger') : alerta.classList.add('alert-success')
       
       // Mensaje de error
       alerta.textContent = this.notificacion.texto
    
       //Insertar en el dom
       if (formulario && formulario.parentElement) {
           formulario.parentElement.insertBefore(alerta, formulario);
       }

        // Quitar después de 5 segundos
        setTimeout(() => {
            alerta.remove();
        }, 3000);

    }
}

// export default Notificacion