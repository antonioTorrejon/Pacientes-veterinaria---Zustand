export type Paciente = {
    id: string
    nombre: string
    especie: string
    propietario: string
    email: string
    fecha: Date
    sintomas: string
}

export type PacienteTemporal = Omit<Paciente, 'id'>