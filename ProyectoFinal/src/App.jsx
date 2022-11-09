import './App.css'
import Header from './Componentes/Header'
import Presupuesto from './Componentes/Presupuesto'
import { useState, useEffect } from 'react'
import Planificador from './Componentes/Planificador';
import Formulario from './Componentes/Formulario';
import ListadoGastos from './Componentes/ListadoGastos';
import FiltrarGastos from './Componentes/FiltrarGastos';
import icono_agregar from './iconos/icono_agregar.png';

function App() {

  const [presupuesto, setPresupuesto] = useState(
    localStorage.getItem('presupuesto') ?? 0 )
  const [gasto, setGasto] = useState({})
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : [])

  const [presValido, setPresValido] = useState(false)
  const [disponible, setDisponible] = useState(0)

  const [filtro, setFiltro] = useState()
  const [filtrados, setFiltrados] = useState([])

  const [estadoModalForm, setEstadoModalForm] = useState(false)

  useEffect(() => {
    const presupuestoStorage = localStorage.getItem('presupuesto') ?? 0;
    if (presupuestoStorage > 0) {
      setPresValido(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos))
  }, [gastos])

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosActualizados)
  }

  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
      setFiltrados(gastosFiltrados)
    }
  }, [filtro])

  return (
    <div className="container sm:flex justify-center font-barlow">

      <div className="flex flex-col justify-center w-3/5 min-w-min">
        <Header />
        {presValido ?
          <Planificador
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            gastos={gastos}
            setGastos={setGastos}
            setPresValido={setPresValido}
            disponible={disponible}
            setDisponible={setDisponible}
          />
          : 
          <Presupuesto
            setPresupuesto={setPresupuesto}
            setPresValido={setPresValido}
          />}

        {presValido && (
          <>
            <FiltrarGastos
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos
              gastos={gastos}
              setGasto={setGasto}
              eliminarGasto={eliminarGasto}
              setEstado={setEstadoModalForm}
              filtrados={filtrados}
              filtro={filtro}

            />
            <div className="bg-[#00B0F0] text-white text-3xl font-extrabold flex justify-center items-center fixed bottom-10 right-12 w-10 h-10 rounded-full" onClick={() => setEstadoModalForm(true)}>
              <img src={icono_agregar} alt="agregar" />
            </div>
          </>
        )
        }
        <Formulario
          gasto={gasto}
          setGasto={setGasto}
          gastos={gastos}
          setGastos={setGastos}
          estado={estadoModalForm}
          setEstado={setEstadoModalForm}
          disponible={disponible}
        />
      </div>

    </div>
  )
}

export default App
