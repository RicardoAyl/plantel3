import './login-administrador.css'

const Login_Administrador = () =>{
    return(
        <section className="login-administrador-contenedor">
            <form className="login-administrador-formulario">

                <label>USUARIO</label>
                <input type='text'></input>

                <label>CONTRASEÑA</label>
                <input type='password'></input>

                <button className='login-administrador-boton-separador'>INICIAR SESIÓN</button>
                <button>RECUPERAR ACCESO</button>


            </form>


        </section>

    )
}

export default Login_Administrador