import './boton-agregar.css'

const Boton_agregar = ({menuP, setMenuP}) => {

    const mostrarMenuP = () => {
        setMenuP(!menuP)
    }
    return(
        <section className='boton-agregar-contenedor'>
            <button onClick={mostrarMenuP}
                className='boton-agregar-boton'>
                AGREGAR
            </button>

        </section>
    )
}

export default Boton_agregar