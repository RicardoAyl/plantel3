import { Route, Routes, Link } from "react-router-dom"

import Presentacion from "../components/presentacion"
import Elegir_usuario from "../components/elegir-usuario"
import Login_AdministradorP from "./login-administrador"
import { useState, useEffect } from "react"


const Inicio = () => {

    const [elegir2, setElegir2] = useState(false)



    const [elegir, setElegir] = useState(false)

    const mostrarElegir = () => {
        setTimeout(() => {
          setElegir(!elegir);
        }, 2000); // 2000 milisegundos = 2 segundos
      }

    useEffect(()=>{
        mostrarElegir()
    }, [])  



    return(
        <>
        <Presentacion elegir={elegir} elegir2={elegir2}/>      
        <Elegir_usuario elegir={elegir} setElegir={setElegir} elegir2={elegir2} setElegir2={setElegir2}/>
                       
        </>
    )
}

export default Inicio