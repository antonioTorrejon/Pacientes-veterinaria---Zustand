import { create } from "zustand"
import { createJSONStorage, devtools, persist } from "zustand/middleware"
import { v4 as uuidv4 } from "uuid"
import { Paciente, PacienteTemporal } from "./types"


type PacienteState = {
    pacientes: Paciente[]
    idActivo: Paciente ['id']
    addPaciente: (data: PacienteTemporal) => void
    eliminarPaciente: (id: Paciente['id']) => void
    seleccionarPacientePorId: (id: Paciente ['id']) => void
    actualizarPaciente: (data: PacienteTemporal) => void
}

const createPaciente = (paciente: PacienteTemporal) : Paciente => {
    return {...paciente, id: uuidv4() }
}

export const usePacienteStore = create<PacienteState>()
    (devtools(
        persist((set) => ({
        pacientes: [],
        idActivo: '',
        addPaciente: (data) => {
            const nuevoPaciente = createPaciente(data)
            set((state) => ({
                pacientes: [...state.pacientes, nuevoPaciente]
            }))
        },
        eliminarPaciente: (id) => {
            set((state) => ({
                pacientes: state.pacientes.filter( paciente => paciente.id !== id)
            }))
        }, 
        seleccionarPacientePorId: (id) => {
            set(() => ({
                idActivo: id
            }))
        },
        actualizarPaciente: (data) => {
            set((state) => ({
                pacientes: state.pacientes.map( paciente => 
                    paciente.id === state.idActivo ? {id: state.idActivo, ...data} : paciente),
                idActivo: ''
            }))
        }
    }), {
        name: 'paciente-storage',
        storage: createJSONStorage( () => localStorage)
    })
))