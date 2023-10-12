import './formulario-tarea.css'

const Formulario_Tarea = () => {
    return(
        <section className='formulario-tarea-contenedor'>
            <form className='formulario-tarea-formulario'>
                <label>FECHA</label>
                <input type='text'></input>

                <label>FECHA LÍMITE DE RECEPCIÓN</label>
                <input type='text'></input>

                <label>DISCIPLINA</label>
                <input type='text'></input>

                <button>AGREGAR TAREA ATRASADA</button>
            </form>

        </section>

    )
}

export default Formulario_Tarea