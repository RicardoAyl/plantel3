import './cabecera.css'
import Icon_menu from '../assets/icon_menu.png'
import Logo_lobo from '../assets/logo-lobo.png'
import Menu_horizontal from './menu-horizontal'
import { useState } from 'react'
import Icon_administrador from '../assets/icon_administrador.png'
import Icon_reporte from '../assets/icon_reporte.png'
import Icon_cerrar from '../assets/icon_cerrar.png'



const Cabecera = () => {

            {/*----------------------------------------------------------------------------------------------------*/}
            {/*----------------------------------------------------------------------------------------------------*/}
            {/*----------------------------------------------------------------------------------------------------*/}
            const [menu, setMenu ] = useState (false)


            const mostrarMenu = () => {
                setMenu( !menu)
            }

           

            {/*----------------------------------------------------------------------------------------------------*/}
            {/*----------------------------------------------------------------------------------------------------*/}
            {/*----------------------------------------------------------------------------------------------------*/} 

    return(
        
        <section className='cabecera-contenedor'>
            <img 
            onClick={mostrarMenu}
            src={Icon_menu} className='cabecera-contenedor-img-menu'></img>
            
            <img src={Logo_lobo} className='cabecera-contenedor-img-lobo'></img>

            <Menu_horizontal menu={menu} setMenu={setMenu}/>


        </section>
      
        
    )
}

export default Cabecera