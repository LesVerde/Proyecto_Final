import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Mensaje from './Mensaje'

function Planificador({ presupuesto, setPresupuesto, gastos, setGastos, setPresValido, disponible, setDisponible }) {

    const [gastado, setGastado] = useState(0)
    const [porcentaje, setPorcentaje] = useState(0)
    const [error, setError] = useState('')

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => total - (-gasto.cantidad), 0);
        const totalDisponible = presupuesto - (totalGastado);
        setTimeout(() => {
            setGastado(totalGastado);
            setDisponible(totalDisponible);
        }, 1000)
    }, [gastos])

    useEffect(() => {
        const operacionPorc = (gastado * 100) / presupuesto;
        const porcentaje = operacionPorc.toFixed(2)
        setPorcentaje(porcentaje)
    }, [gastado])

    useEffect(() => {
        if (porcentaje > 90) {
            setError('¡Tu presupuesto está por agotarse!')
            setTimeout(() => {
                setError('')
            }, 2500)
        }
    }, [porcentaje])

    const resetApp = () => {
        const respuesta = confirm('¿Estás seguro de Resetear la Aplicación?')
        if (respuesta) {
            setPresValido(false);
            setPresupuesto(0);
            setGastos([]);
        }
    }

    return (
        <div className=" bg-white rounded-3xl mt-10 p-10 shadow-2xl font-semibold h-70 flex">
            <div className="w-1/2 h-56 flex justify-center mr-5" >
                <CircularProgressbar
                    value={porcentaje}
                    text={`${porcentaje}%`}
                    styles={buildStyles({
                        rotation: 0.0,
                        strokeLinecap: 'round',
                        textSize: '15px',
                        pathTransitionDuration: 0.9,
                        pathColor: (porcentaje <= 75 ? '#00B0F0' : '#FF0000'),
                        textColor: '#00B0F0',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7'
                    })}
                />
            </div>
            <div className=" w-1/2" >
                <div className=" h-56 grid grid-cols-1 content-between pl-5 text-sm  tracking-wider sm:text-xl">
                    {error && <Mensaje>{error}</Mensaje>}
                    <p className="font-bold text-black pl-3 text-start">Presupuesto: <span className="font-medium">$ {presupuesto}</span></p>
                    <p className="font-bold bg-[#27c90b] text-white rounded-md p-2 pl-3 text-start
                    ">Disponible: <span className="font-medium">$ {disponible}</span></p>
                    <p className="font-bold bg-[#FF0000] text-white rounded-md p-2 pl-3   mb-5 text-start">Gastado: <span className="font-medium">$ {gastado}</span></p>
                    <p className="bg-[#111111] rounded-md  p-1 text-white" onClick={resetApp}>Reset App</p>
                </div>
            </div>

        </div>
    )
}

export default Planificador;