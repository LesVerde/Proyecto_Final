import { useState, useEffect } from "react";
import Mensaje from "./Mensaje";
import icono_cerrar from "../iconos/icono_cerrar.png"

function Formulario({ gasto, setGasto, gastos, setGastos, estado, setEstado, disponible }) {
    const [nombreGasto, setNombreGasto] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [error, setError] = useState('')

    const generarId = () => {
        const random = Math.random().toString(36)
        const fecha = Date.now().toString(36)
        return random + fecha;
    }

    const generarFecha = () => {
        const fechaActual = new Date();
        return fechaActual.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    const validarFormulario = (e) => {
        e.preventDefault();

        if ([nombreGasto, cantidad, categoria].includes('')) {
            setError('Todos los campos son obligatorios')
            setTimeout(() => {
                setError('')
            }, 2500)
            return;
        }
        if (cantidad > disponible) {
            setError('El gasto supera cantidad disponible')
            setTimeout(() => {
                setError('')
            }, 2500)
            return;
        }

        const objGasto = { nombreGasto, cantidad, categoria }
        if (gasto.id) {
            objGasto.id = gasto.id;
            objGasto.fecha = generarFecha()
            const gastosActualizados = gastos.map(gastoActual => gastoActual.id === gasto.id ? objGasto : gastoActual)
            setGastos(gastosActualizados);
            setGasto({});
        } else {
            objGasto.id = generarId();
            objGasto.fecha = generarFecha();
            setGastos([...gastos, objGasto])
        }

        setNombreGasto('');
        setCantidad('');
        setCategoria('');
        setEstado(false)

    }

    useEffect(() => {
        if (Object.keys(gasto).length > 0) {
            setNombreGasto(gasto.nombreGasto);
            setCantidad(gasto.cantidad);
            setCategoria(gasto.categoria)
        }
    }, [gasto])


    return (
        <>
            {estado &&
                <div className="w-screen h-screen fixed top-0 left-0 bg-black/95 text-xl tracking-wider flex justify-center items-center" >
                    <div className="w-1/3">
                        <h2 className=" text-3xl text-white uppercase font-bold tracking-widest mb-2">Nuevo Gasto</h2>
                        <hr /> <br />

                        <form className="block "
                            onSubmit={validarFormulario}>
                            {error && <Mensaje>{error}</Mensaje>}

                            <label htmlFor="nombre-gasto" className="text-white">Nombre Gasto</label>
                            <input
                                id="nombre-gasto"
                                type="text"
                                className="border-2 w-full p-2 my-2 placeholder-gray-600 rounded-md"
                                value={nombreGasto}
                                onChange={(e) => setNombreGasto(e.target.value)}
                            />
                            <label htmlFor="cantidad" className="text-white">Cantidad</label>
                            <input
                                id="cantidad" type="number"
                                className="border-2 w-full p-2 my-2 placeholder-gray-600 rounded-md"
                                value={cantidad}
                                onChange={(e) => setCantidad(e.target.value)}
                            />
                            <label htmlFor="categoria" className="text-white">Categoria</label>
                            <select name="categoria" id="categoria" className="border-2 w-full p-2 my-2 text-black placeholder-gray-600 rounded-md" value={categoria} onChange={(e) => setCategoria(e.target.value)} >
                                <option value="">Seleccionar</option>
                                <option value="transporte">Transporte</option>
                                <option value="comida">Comida</option>
                                <option value="salud">Salud</option>
                                <option value="hogar">Hogar</option>
                                <option value="entretenimiento">Entretenimiento</option>
                                <option value="ahorro">Ahorro</option>
                                <option value="varios">Varios</option>
                            </select>
                            <input type="submit" className="bg-[#00B0F0] text-white text-sm md:text-xl text-center font-semibold rounded-md m-10  py-3 px-10" value={gasto.id ? 'Editar Gasto' : 'Agregar Gasto'} />
                        </form>
                    </div>
                    <div className="text-3xl font-extrabold flex justify-center items-center fixed top-10 right-12 w-10 h-10 rounded-full" onClick={() => {
                        setEstado(false)
                        setNombreGasto('');
                        setCantidad('');
                        setCategoria('');
                    }}>
                        <img src={icono_cerrar} alt="agregar" />
                    </div>
                </div>
            }
        </>
    )

}

export default Formulario