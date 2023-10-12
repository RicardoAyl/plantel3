import './formulario-citatorio.css'

const Formulario_Citatorio= () => {
    return(
        <section className='formulario-citatorio-contenedor'>
            <form className='formulario-citatorio-formulario'>
                <label>FECHA</label>
                <input type='text'></input>

                <label>ASUNTO</label>
                <input type='text'></input>

                <label>FECHA CITATORIO</label>
                <input type='text'></input>

                <label>LUGAR</label>
                <input type='text'></input>

                <label>HORA</label>
                <input type='text'></input>

                <button>AGREGAR CITATORIO</button>
            </form>

        </section>

    )
}

export default Formulario_Citatorio