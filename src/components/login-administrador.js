import './login-administrador.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'


const Login_Administrador = () =>{
    const {register, handleSubmit} = useForm()

    const navigate = useNavigate()
    const [error, mostrarError] = useState(false)





    const onSubmit = (data) => {
        const user = 'Luis'
        const password = '123456'

        const user2 = 'Yuliana'
        const password2 = '123456'

        const user3 = 'Neima'
        const password3 = '123456'

        if(data.usuario === user && data.contrasena ===password){
            navigate('prefecto')
           
        }else{
            if(data.usuario === user2 && data.contrasena ===password2){
                navigate('orientadora')
               
            }else{
                if(data.usuario === user3 && data.contrasena ===password3){
                    navigate('directora')
                   
                }
            }
        }
        
    }

    return(
        <section className="login-administrador-contenedor">
            <form onSubmit={handleSubmit(onSubmit)} 
                className="login-administrador-formulario">

                <label>USUARIO</label>
                <input type='text' {...register ('usuario', {
                    required: true
                })}></input>

                <label>CONTRASEÑA</label>
                <input type='password' {...register ('contrasena', {
                    required: true
                })}></input>

                <button className='login-administrador-boton-separador' type='submit'>INICIAR SESIÓN</button>
                


            </form>
            <button>RECUPERAR ACCESO</button>
        </section>

    )
}

export default Login_Administrador