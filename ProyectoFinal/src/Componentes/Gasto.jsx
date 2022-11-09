import icono_hogar from '../iconos/icono_hogar.png'
import icono_salud from '../iconos/icono_salud.png'
import icono_comida from '../iconos/icono_comida.png'
import icono_transporte from '../iconos/icono_transporte.png'
import icono_ahorro from '../iconos/icono_ahorro.png'
import icono_entretenimiento from '../iconos/icono_entretenimiento.png'
import icono_varios from '../iconos/icono_varios.png'
import icono_editar from '../iconos/icono_editar.png'
import icono_eliminar from '../iconos/icono_eliminar.png'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

function Gasto({ gasto, setGasto, eliminarGasto, setEstado }) {
    
    const { nombreGasto, cantidad, categoria, fecha, id } = gasto;
    const iconos = {
        hogar: icono_hogar,
        salud: icono_salud,
        comida: icono_comida,
        transporte: icono_transporte,
        ahorro: icono_ahorro,
        entretenimiento: icono_entretenimiento,
        varios: icono_varios
    }

    const eliminarListado = () => {
        eliminarGasto(id)
    }

    const editarListado = () => {
        setGasto(gasto)
        setEstado(true)
    }

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={editarListado}>
                <div className='bg-blue-600 text-white text-xl font-bold tracking-wider rounded-3xl flex justify-center items-center'>
                    <p>Editar Gasto </p>
                    <img className='w-10 ml-2' src={icono_editar} alt="editar" />
                </div>
            </SwipeAction>
        </LeadingActions>
    );

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                destructive={true}
                onClick={eliminarListado}
            >
                <div className='bg-red-600 text-white text-xl font-bold tracking-wider rounded-3xl flex justify-center items-center'>
                    <img className='w-10 ml-2' src={icono_eliminar} alt="editar" />
                    <p>Eliminar Gasto </p>
                </div>
            </SwipeAction>
        </TrailingActions>
    );

    return (
        <div className="bg-white shadow-2xl mb-2 rounded-3xl ">
            <SwipeableList>
                <SwipeableListItem
                    leadingActions={leadingActions()}
                    trailingActions={trailingActions()}>
                    <div className='flex justify-between items-center my-3 mx-5 w-full h-30'>
                        <div className='w-3/4  text-left flex items-center pl-5'>
                            <img className=' w-1/4  rounded-3xl mr-7' src={iconos[categoria]} alt="" />
                            <div>
                                <p className="font-bold text-gray-600 text-2xl uppercase tracking-widest pb-2 ">{categoria}</p>
                                <p className="font-bold text-grisobsc text-xl pb-2 ">{nombreGasto}</p>
                                <p className="font-bold text-grisobsc text-sm md:text-lg">Agregado el: <span className="font-normal normal-case">{fecha}</span></p>
                            </div>
                        </div>
                        <div className='justify-self-end mr-10 '>
                            <p className="font-bold uppercase text-2xl  ">${cantidad}</p>
                        </div>
                    </div>
                </SwipeableListItem>
            </SwipeableList>
        </div>

    )
}

export default Gasto;