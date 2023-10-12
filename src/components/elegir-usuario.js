import { Link } from 'react-router-dom'

import './elegir-usuario.css'
import Icon_tutores from '../assets/icon_tutores.png'
import Icon_administrador from '../assets/icon_administrador.png'
import Logolobo from '../assets/logo-lobo.png'



const Elegir_usuario = ({elegir, setElegir, elegir2, setElegir2,}) => {

    const mostrarElegir = () => {
        setElegir(!elegir)
    }

    const mostrarElegir2 = () => {
        setElegir2(!elegir2)
    }
    return(
        <section className='elegir-usuario-contenedor-usuarios'>


            {/*onClick={()=>{mostrarElegir(); mostrarElegir2()}*/}
           {/*onClick={()=>{mostrarElegir(); mostrarElegir2()}*/}

            {/*Contenedor de botón elegir usuario*/}
            <Link to="administrador" 
                className='elegir-usuario-tipo-usuario' >
                <img src={Icon_administrador}>
                </img>        
                <span>Administrador</span>
            </Link>

            <img className='presentacion-logo-2' src={Logolobo}></img>

            {/*Contenedor de botón elegir usuario*/}
            <Link to="tutor"
                className='elegir-usuario-tipo-usuario' >
                <img src={Icon_tutores}>
                </img>        
                <span>Tutor</span>
            </Link>

        </section>

    )
}

export default Elegir_usuario