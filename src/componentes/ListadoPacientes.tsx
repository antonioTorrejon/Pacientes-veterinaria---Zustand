import { usePacienteStore } from "../store"
import DetallePaciente from "./DetallePaciente"

export default function ListadoPacientes() {

    const pacientes = usePacienteStore((state) => state.pacientes)

    return (
      <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
          {pacientes.length ? (
              <>
                  <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
                  <p className="text-xl mt-5 mb-10 text-center">
                      Administra tus {''}
                      <span className="text-indigo-600 font-bold"> pacientes y citas</span>
                  </p>
                  {pacientes.map(paciente => (
                      <DetallePaciente
                          key={paciente.id}
                          paciente={paciente}
                      />
                  ))}
              </>
          )  : (
              <>
                  <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                  <p className="text-xl mt-5 mb-10 text-center">
                      Comienza añadiendo pacientes {''}
                      <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
                  </p>
              </>
          )}
      </div>
    )
}
