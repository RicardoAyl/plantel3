import './formulario-fai.css'

const Formulario_Fai = () => {
    return(
        <section className='formulario-fai-contenedor'>
            <form className='formulario-fai-formulario'>
                <label>EDAD</label>
                <input type='text'></input>

                <label>MOTIVO</label>
                <input type='text'></input>

                <label>ESTRATEGIA</label>
                <input type='text'></input>

                <label>RESULTADOS</label>
                <input type='text'></input>

                <button>AGREGAR ATENCIÓN INDIVIDUAL</button>
            </form>

        </section>

    )
}

export default Formulario_Fai