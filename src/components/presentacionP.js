import './presentacionP.css'
import Logolobo from '../assets/logo-lobo.png'

const PresentacionP = () => {
    return(
        <section className='presentacionP-contenedor' >
            <img className='presentacionP-logo' src={Logolobo}></img>
        </section>
    )
}

export default PresentacionP