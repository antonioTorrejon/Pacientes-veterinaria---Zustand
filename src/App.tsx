import { ToastContainer } from "react-toastify"
import FormularioPacientes from "./componentes/FormularioPacientes"
import ListadoPacientes from "./componentes/ListadoPacientes"
import "react-toastify/dist/ReactToastify.css"

function App() {

  return (
    <>
        <div className="container mx-auto mt-20 ">
            <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
              Seguimiento de pacientes {''}
              <span className="text-indigo-700">Veterinaria</span>
            </h1>
        </div>

        <div className="m-12 md:flex">
            <FormularioPacientes />
            <ListadoPacientes />
        </div>

        <ToastContainer />
    </>
  )
}

export default App
