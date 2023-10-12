import CabeceraO from "../components/cabeceraO"
import Alumno from "../components/alumno"
import Notificaciones_Orientadora from "../components/notificaciones-orientadora"
import Buscador from "../components/buscador"
import Boton_agregar from "../components/boton-agregar"
import Menu_agregarO from "../components/menu-agregarO"

import { useState } from "react"

const Orientadora = () => {

    const [menuP, setMenuP] = useState(false)

    return(
        <>
            <CabeceraO/>
            <Alumno/>
            <Buscador/>
            <Notificaciones_Orientadora/>
            <Boton_agregar menuP={menuP} setMenuP={setMenuP}/>
            <Menu_agregarO menuP={menuP} setMenuP={setMenuP}/>
        </>
    )
}

export default Orientadora