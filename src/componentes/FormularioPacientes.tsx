import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast }  from 'react-toastify'
import Error from "./Error"
import type { PacienteTemporal } from "../types"
import { usePacienteStore } from "../store"

export default function FormularioPacientes() {

    const addPaciente = usePacienteStore(state => state.addPaciente)
    const idActivo = usePacienteStore(state => state.idActivo)
    const pacientes = usePacienteStore(state => state.pacientes)
    const actualizarPaciente = usePacienteStore(state => state.actualizarPaciente)
    
    const { register, handleSubmit, setValue, formState : {errors}, reset } = useForm<PacienteTemporal>()

    useEffect (() => {
        if(idActivo){
            const pacienteActivo =pacientes.filter(paciente => paciente.id === idActivo)[0]
            setValue('nombre', pacienteActivo.nombre )
            setValue('especie', pacienteActivo.especie )
            setValue('propietario', pacienteActivo.propietario )
            setValue('email', pacienteActivo.email )
            setValue('fecha', pacienteActivo.fecha )
            setValue('sintomas', pacienteActivo.sintomas )
        }
 
    }, [idActivo])

    const pacienteRegistrado = (data : PacienteTemporal ) => {
        if(idActivo){
            actualizarPaciente(data)
            toast.success('Paciente actualizado correctamente')
        } else {
            addPaciente(data)
            toast.success('Paciente registrado correctamente')
        }

        reset()
    }

    return (

      <div className="md:w-1/2 lg:w-2/5 mx-5">
          <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
  
          <p className="text-lg mt-5 text-center mb-10">
              Añade Pacientes y {''}
              <span className="text-indigo-600 font-bold">Administralos</span>
          </p>
  
          <form 
              className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
              noValidate
              onSubmit={handleSubmit(pacienteRegistrado)}
          >
                <div className="mb-5">
                    <label htmlFor="nombre" className="text-sm uppercase font-bold">
                        Paciente 
                    </label>
                    <input  
                        id="nombre"
                        className="w-full p-3  border border-gray-100"  
                        type="text" 
                        placeholder="Nombre del Paciente" 
                        {...register('nombre', {
                            required: 'El nombre del paciente es obligatorio'
                        })}
                    />

                    {errors.nombre && (
                        <Error>{errors.nombre?.message}</Error>
                    )}
                     
                </div>

                <div className="mb-5">
                    <label htmlFor="especie" className="text-sm uppercase font-bold">
                        Especie del animal 
                    </label>
                    <input  
                        id="especie"
                        className="w-full p-3  border border-gray-100"  
                        type="text" 
                        placeholder="Especie del animal" 
                        {...register('especie', {
                            required: 'La especie del animal es obligatoria'
                        })}
                    />

                    {errors.especie && (
                        <Error>{errors.especie?.message}</Error>
                    )}
                </div>
  
                <div className="mb-5">
                  <label htmlFor="propietario" className="text-sm uppercase font-bold">
                      Propietario 
                  </label>
                  <input  
                      id="propietario"
                      className="w-full p-3  border border-gray-100"  
                      type="text" 
                      placeholder="Nombre del Propietario" 
                      {...register('propietario', {
                            required: 'El nombre del propietario es obligatorio'
                        })}
                  />
                    {errors.propietario && (
                        <Error>{errors.propietario?.message}</Error>
                    )}
                </div>
  
              <div className="mb-5">
                <label htmlFor="email" className="text-sm uppercase font-bold">
                    Email 
                </label>
                <input  
                    id="email"
                    className="w-full p-3  border border-gray-100"  
                    type="email" 
                    placeholder="Email de Registro" 
                    {...register("email", {
                        required: "El Email es Obligatorio",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email No Válido'
                        }
                      })} 
                />
                {errors.email && (
                    <Error>{errors.email?.message}</Error>
                )}
              </div>
  
              <div className="mb-5">
                  <label htmlFor="fecha" className="text-sm uppercase font-bold">
                      Fecha Alta 
                  </label>
                  <input  
                      id="fecha"
                      className="w-full p-3  border border-gray-100"  
                      type="date" 
                      {...register('fecha', {
                        required: 'La fecha de alta es obligatoria'
                    })}
                  />
                {errors.fecha && (
                    <Error>{errors.fecha?.message}</Error>
                )}
              </div>
              
              <div className="mb-5">
                    <label htmlFor="sintomas" className="text-sm uppercase font-bold">
                    Síntomas 
                    </label>
                    <textarea  
                        id="sintomas"
                        className="w-full p-3  border border-gray-100"  
                        placeholder="Síntomas del paciente" 
                        {...register('sintomas', {
                            required: 'Los síntomas son obligatorios'
                        })}
                    />
                    {errors.sintomas && (
                        <Error>{errors.sintomas?.message}</Error>
                    )}

              </div>
  
              <input
                  type="submit"
                  className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                  value='Guardar Paciente'
              />
          </form> 
      </div>
    )
  }