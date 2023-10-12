import './formulario-alumno.css'

const Formulario_Alumno = () => {
    return(
        <section className='formulario-alumno-contenedor'>
            <form className='formulario-alumno-formulario'>
                <label>MATRÍCULA</label>
                <input type='text'></input>

                <label>NOMBRES</label>
                <input type='text'></input>

                <label>APELLIDO PATERNO</label>
                <input type='text'></input>

                <label>APELLIDO MATERNO</label>
                <input type='text'></input>

                <label>GRADO</label>
                <input type='text'></input>

                <label>GRUPO</label>
                <input type='text'></input>

                <label>TURNO</label>
                <input type='text'></input>

                <label>TELÉFONO</label>
                <input type='text'></input>

                <button>AGREGAR ALUMNO</button>
            </form>

        </section>

    )
}

export default Formulario_Alumno