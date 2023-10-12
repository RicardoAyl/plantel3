import './menu-agregar.css'
import Icon_reporte from '../assets/icon_reporte.png'
import { Link } from 'react-router-dom'


const Menu_agregar = ({menuP, setMenuP}) => {

    const mostrarMenuP = () => {
        setMenuP(!menuP)
    }

    return(
        <section className={`menu-agregar-contenedor  ${ menuP ? 'mostrar' : ''}`}>

            <div className='menu-agregar-contenedor-cabecera'>
                <h2>
                    AGREGAR AL ALUMNO
                </h2>

            </div>

            <div className='menu-agregar-contenedor-items'>

                <Link to='agregar-reporte' className='menu-agregar-contenedor-items-botones'><img className='icon' src={Icon_reporte}></img>            <h5>REPORTE</h5></Link>
                <Link to='agregar-citatorio' className='menu-agregar-contenedor-items-botones'><img className='icon' src={Icon_reporte}></img>            <h5>CITATORIO</h5></Link>
                <Link to='agregar-falta' className='menu-agregar-contenedor-items-botones'><img className='icon' src={Icon_reporte}></img>            <h5>FALTA</h5></Link>
                <Link to='agregar-retardo' className='menu-agregar-contenedor-items-botones'><img className='icon' src={Icon_reporte}></img>            <h5>RETARDO</h5></Link>
                <Link to='agregar-justificacion' className='menu-agregar-contenedor-items-botones'><img className='icon' src={Icon_reporte}></img>            <h5>JUSTIFICACIÓN</h5></Link>
                <Link to='agregar-tarea-atrasada' className='menu-agregar-contenedor-items-botones'><img className='icon' src={Icon_reporte}></img>            <h5>TAREA</h5></Link>

            </div>

            <div className='menu-agregar-contenedor-cancelar'>
                <button onClick={mostrarMenuP}>
                    CANCELAR
                </button>

            </div>

        </section>

    )
}

export default Menu_agregar

