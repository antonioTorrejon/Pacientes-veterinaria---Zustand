type ItemDetallePacienteProps = {
    label: string
    data: string
}

export default function ItemDetallePaciente({label, data}: ItemDetallePacienteProps) {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">
        {label}: {''}
        <span className="font-normal normal-case">{data}</span>
    </p>
  )
}
