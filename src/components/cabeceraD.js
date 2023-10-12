import './cabecera.css'
import Icon_menu from '../assets/icon_menu.png'
import Logo_lobo from '../assets/logo-lobo.png'
import Menu_horizontalO from './menu-horizontalO'
import { useState } from 'react'
import Icon_administrador from '../assets/icon_administrador.png'
import Icon_reporte from '../assets/icon_reporte.png'
import Icon_cerrar from '../assets/icon_cerrar.png'
import Menu_horizontalD from './menu-horizontalD'



const CabeceraD = () => {

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

            <Menu_horizontalD menu={menu} setMenu={setMenu}/>


        </section>
      
        
    )
}

export default CabeceraD