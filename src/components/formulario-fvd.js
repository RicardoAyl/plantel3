import './formulario-fvd.css'

const Formulario_Fvd = () => {
    return(
        <section className='formulario-fvd-contenedor'>
            <form className='formulario-fvd-formulario'>
                <label>MOTIVO</label>
                <input type='text'></input>

                <label>ESTRATEGIA</label>
                <input type='text'></input>

                <label>RESULTADOS</label>
                <input type='text'></input>

                <button>AGREGAR VISITA DOMICILIARIA</button>
            </form>

        </section>

    )
}

export default Formulario_Fvd