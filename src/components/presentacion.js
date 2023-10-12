import './presentacion.css'
import Logolobo from '../assets/logo-lobo.png'



const Presentacion = ({elegir, elegir2}) => {



    return (
        <section className={`presentacion-contenedor ${ elegir ? 'elegir' : ''} ${ elegir2 ? 'dos' : ''}`} >
            <img className='presentacion-logo' src={Logolobo}></img>
        </section>
    )
}

export default Presentacion

/*{`presentacion-contenedor ${ elegir ? 'elegir' : ''} ${ elegir2 ? 'dos' : ''}`} 

${ elegir ? 'elegir' : ''} */