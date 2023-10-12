import './formulario-reporte.css'

const Formulario_Reporte = () => {
    return(
        <section className='formulario-reporte-contenedor'>
            <form className='formulario-reporte-formulario'>
                <label>FECHA</label>
                <input type='text'></input>

                <label>MOTIVO</label>
                <input type='text'></input>

                <label>SANCIÓN</label>
                <input type='text'></input>

                <button>AGREGAR REPORTE</button>
            </form>

        </section>
    )
}

export default Formulario_Reporte