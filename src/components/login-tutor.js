import './login-tutor.css'

const Login_Tutor = () =>{
    return(
        <section className="login-tutor-contenedor">
            <form className="login-tutor-formulario">

                <label>USUARIO</label>
                <input type='text'></input>

                <label>CONTRASEÑA</label>
                <input type='password'></input>

                <button className='login-tutor-boton-separador'>INICIAR SESIÓN</button>
                <button>RECUPERAR ACCESO</button>


            </form>


        </section>

    )
}

export default Login_Tutor