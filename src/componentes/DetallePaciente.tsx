import { Paciente } from "../types"
import ItemDetallePaciente from "./ItemDetallePaciente"
import { usePacienteStore } from "../store"
import { toast } from "react-toastify"

type DetallePacienteProps = {
    paciente: Paciente
}

export default function DetallePaciente({paciente}: DetallePacienteProps) {

    const eliminarPaciente = usePacienteStore((state) => state.eliminarPaciente)

    const seleccionarPacientePorId = usePacienteStore((state) => state.seleccionarPacientePorId)

    const handleClick = () => {
        eliminarPaciente(paciente.id)
        toast('Paciente eliminado', {
            type: 'error'
        })
    }

    return (
      <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
          <ItemDetallePaciente label="ID" data={paciente.id} />
          <ItemDetallePaciente label="Nombre" data={paciente.nombre} />
          <ItemDetallePaciente label="Especie" data={paciente.especie} />
          <ItemDetallePaciente label="Propietario" data={paciente.propietario} />
          <ItemDetallePaciente label="Email" data={paciente.email} />
          <ItemDetallePaciente label="Fecha alta" data={paciente.fecha.toString()} />
          <ItemDetallePaciente label="Síntomas" data={paciente.sintomas} />

          <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
              <button
                  type="button"
                  className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white 
                  font-bold unppecase rounded-lg"
                  onClick={() => seleccionarPacientePorId(paciente.id)}
              >Editar
              </button>

              <button
                  type="button"
                  className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white 
                  font-bold unppecase rounded-lg"
                  onClick={handleClick}
              >Eliminar
              </button>

          </div>
      </div>
    )
}
