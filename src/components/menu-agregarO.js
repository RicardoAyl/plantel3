import './menu-agregar.css'
import Icon_reporte from '../assets/icon_reporte.png'
import { Link } from 'react-router-dom'


const Menu_agregarO = ({menuP, setMenuP}) => {

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

                <Link to='agregar-fai' className='menu-agregar-contenedor-items-botones'><img className='icon' src={Icon_reporte}></img>            <h5>FAI</h5></Link>
                <Link to='agregar-fvd' className='menu-agregar-contenedor-items-botones'><img className='icon' src={Icon_reporte}></img>            <h5>FVD</h5></Link>


            </div>

            <div className='menu-agregar-contenedor-cancelar'>
                <button onClick={mostrarMenuP}>
                    CANCELAR
                </button>

            </div>

        </section>

    )
}

export default Menu_agregarO

