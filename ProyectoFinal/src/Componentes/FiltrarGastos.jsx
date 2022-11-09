function FiltrarGastos({ filtro, setFiltro }) {
    return (
        <div className="bg-white rounded-3xl my-8 py-6 px-10 shadow-2xl font-semibold flex justify-around items-center">
            <div className="w-1/2 text-[#292929] text-2xl md:text-3xl tracking-wider">
                <p>Filtrar Gastos</p>
            </div>
            <div className="w-1/2 ">
                <form action="">
                    <select name="categoria" id="categoria" className="text-grisobsc border-2 border-[#00B0F0] w-11/12 ml-7 p-2 rounded-md text-center text-xl tracking-wider"
                        value={filtro}
                        onChange={(e) =>
                            setFiltro(e.target.value)} >
                        <option value="">Todos</option>
                        <option value="transporte">Transporte</option>
                        <option value="comida">Comida</option>
                        <option value="salud">Salud</option>
                        <option value="hogar">Hogar</option>
                        <option value="entretenimiento">Entretenimiento</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="varios">Varios</option>
                    </select>
                </form>
            </div>
        </div>
    )
}

export default FiltrarGastos;