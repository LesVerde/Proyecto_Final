import { useState } from "react";
import Mensaje from "./Mensaje";


function Presupuesto({ setPresupuesto, setPresValido }) {
    const [definir, setDefinir] = useState();
    const [error, setError] = useState('');

    const validacionPresupuesto = (e) => {
        e.preventDefault();
        if (definir <= 0 || !definir) {
            setError('Ingresa presupuesto valido');
            setTimeout(() => {
                setError('')
            }, 3000)
            return;
        }
        setPresupuesto(definir)
        setPresValido(true)
    }

    return (
        <div className=" bg-white rounded-3xl mt-10 p-10 shadow-2xl font-semibold text-lg h-70">
            <div>
                <h2 className="text-grisobsc text-2xl tracking-wide uppercase">Definir presupuesto</h2><br />

                {error && <Mensaje>{error}</Mensaje>}
                <form
                    onSubmit={validacionPresupuesto}>

                    <input
                        id="presupuesto"
                        type="number"
                        placeholder="$"
                        className="bg-neutral-100 text-center text-xl rounded-md w-5/6 h-9"
                        value={definir}
                        onChange={(e) => setDefinir(e.target.value)} /> <br /> <br />
                    <input
                        id="añadir"
                        type="submit"
                        className="bg-[#00B0F0] text-xl text-white uppercase tracking-widest rounded-md w-5/6 h-9 mb-5"
                        value='Añadir' />
                </form>
            </div>
        </div>
    )
}

export default Presupuesto;