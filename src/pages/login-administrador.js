import PresentacionP from "../components/presentacionP"
import Login_Administrador from "../components/login-administrador"
import { Route, Routes } from "react-router-dom"
import Prefecto from "./prefecto"


const Login_AdministradorP = () => {
    return(
        <>
        <PresentacionP/>
        <Login_Administrador/>
        </>
    )
}

export default Login_AdministradorP