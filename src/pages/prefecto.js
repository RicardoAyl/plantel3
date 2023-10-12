import Notificaciones_prefecto from "../components/notificaciones-prefecto"
import Cabecera from "../components/cabecera"
import Alumno from "../components/alumno"
import Buscador from "../components/buscador"
import Menu_agregar from "../components/menu-agregar"
import Boton_agregar from "../components/boton-agregar"

import { useState } from "react"


const Prefecto = () => {

    const [menuP, setMenuP] = useState(false)


    return(
        <>
            <Cabecera/>
            <Alumno/>
            <Buscador/>
            <Notificaciones_prefecto/>
            <Boton_agregar menuP={menuP} setMenuP={setMenuP}/>
            <Menu_agregar menuP={menuP} setMenuP={setMenuP}/>
        </>
    )
}

export default Prefecto