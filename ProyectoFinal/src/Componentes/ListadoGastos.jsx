import Gasto from "./Gasto"

function ListadoGastos({ gastos, setGasto, eliminarGasto, setEstado, filtrados, filtro }) {
    return (
        <>
            {
                filtro ? (
                    <>
                        <h2 className=" text-[#292929] text-3xl uppercase font-bold tracking-wider mb-3">{(filtrados.length <= 0) ? 'No hay gastos en esta categoria' : 'Gastos'}</h2>
                        {
                            <div className="flex flex-col justify-center">

                                {filtrados.map(gasto => (
                                    <Gasto
                                        key={gasto.id}
                                        gasto={gasto}
                                        setGasto={setGasto}
                                        eliminarGasto={eliminarGasto}
                                        setEstado={setEstado}
                                    />
                                ))}
                            </div>

                        }
                    </>
                )
                    :
                    (
                        <>
                            <h2 className=" text-[#292929] text-3xl uppercase font-bold tracking-wider mb-3">{(gastos.length <= 0) ? 'No hay gastos' : 'Gastos'}</h2>
                            {
                                <div className="flex flex-col justify-center">

                                    {gastos.map(gasto => (
                                        <Gasto
                                            key={gasto.id}
                                            gasto={gasto}
                                            setGasto={setGasto}
                                            eliminarGasto={eliminarGasto}
                                            setEstado={setEstado}
                                        />
                                    ))}
                                </div>
                            }
                        </>)
            }
        </>
    )

}

export default ListadoGastos