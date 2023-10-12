import './formulario-retardo.css'

const Formulario_Retardo= () => {
    return(
        <section className='formulario-retardo-contenedor'>
            <form className='formulario-retardo-formulario'>
                <label>FECHA</label>
                <input type='text'></input>


                <button>AGREGAR RETARDO</button>
            </form>

        </section>

    )
}

export default Formulario_Retardo