import './menu-horizontal.css'
import Icon_administrador from '../assets/icon_administrador.png'
import Icon_reporte from '../assets/icon_reporte.png'
import Icon_cerrar from '../assets/icon_cerrar.png'
import { useState } from 'react'

const Menu_horizontalD = ({ menu, setMenu}) =>{
           
            {/*const [menu, setMenu ] = useState (false)*/}


            const mostrarMenu = () => {
                setMenu( !menu)
            }

           
    return(
        <section className={`menu-horizontal-contenedor ${ menu ? 'estaActivo' : ''}`}>

           

            <div className='menu-horizontal-contenedor-administrador'>
                <img src={Icon_administrador}></img>

                <h3>NEIMA CAHUICH</h3>

                <h4>DIRECTORA</h4>
            </div>

            <hr className='menu-horizontal-separador'></hr>

            <div className='menu-horizontal-cerrar'> 
                <h3>MENÚ</h3>
                <img src={Icon_cerrar}
                    onClick={mostrarMenu}></img>
            </div>

            <nav className='menu-horizontal-contenedor-nav'>
                <ul className='menu-horizontal-contenedor-lista'>
                    <li>
                        <img src={Icon_reporte}></img>
                        <a>USUARIOS</a>
                        
                    </li>

                    <li>
                        <img src={Icon_reporte}></img>
                        <a>CONTRASEÑAS</a>
                    </li>

                    <li>
                        <img src={Icon_reporte}></img>
                        <a>CERRAR SESIÓN</a>
                    </li>
                    
                </ul>
            </nav>

        </section>
        
    )
}

export default Menu_horizontalD