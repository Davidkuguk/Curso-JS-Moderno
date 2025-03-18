import { generarId } from "./funciones.js";

// Objeto de Cita
export  const citaObj = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

export let editando = {
    value: false
}
