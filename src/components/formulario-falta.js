import './formulario-falta.css'

const Formulario_Falta= () => {
    return(
        <section className='formulario-falta-contenedor'>
            <form className='formulario-falta-formulario'>
                <label>FECHA</label>
                <input type='text'></input>

                <label>FECHA LÍMITE PARA JUSTIFICAR</label>
                <input type='text'></input>

                <button>AGREGAR FALTA</button>
            </form>

        </section>

    )
}

export default Formulario_Falta