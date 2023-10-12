import './buscadorT.css';
import Icon_lupa from '../assets/icon_lupa.png'

const BuscadorT = () =>{
    return(
        <section className='buscador-contenedor'>

            
            <div className='buscador-contenedor-formulario'>
                <input type='text' placeholder='NOMBRE'>
                </input>
                <button><img src={Icon_lupa}></img></button>
            </div>


        </section>

    )
}

export default BuscadorT