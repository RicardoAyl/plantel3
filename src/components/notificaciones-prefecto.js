import './notificaciones-prefecto.css'
import Icon_reporte from '../assets/icon_reporte.png'

const Notificaciones_prefecto = () => {
    return(
        <section className='notificaciones-prefecto'>

            <div className='notificaciones-prefecto-contenedor'>
                {/*----------------------------------------------------------*/}
                {/*-----------------CONTENEDOR DATOS ALUMNO------------------*/}
                {/*----------------------------------------------------------*/}
                <div className='notificaciones-prefecto-contenedor-dato-alumno'>
                    <span>JUAN ALEJANDRO PÉREZ CANO</span>

                    <div>
                        <span>GRADO: 1</span>
                        <span>GRUPO: B</span>
                    </div>

                    <span>TURNO: MATUTINO</span>

                </div>

                <hr></hr>
                {/*----------------------------------------------------------*/}
                {/*-----------------CONTENEDOR NOTIFICACIONES----------------*/}
                {/*----------------------------------------------------------*/}
                <div className='notificaciones-prefecto-contenedor-notificaciones'>
                    <img src={Icon_reporte}></img>
                    <img src={Icon_reporte}></img>
                    <img src={Icon_reporte}></img>
                    <img src={Icon_reporte}></img>
                    <img src={Icon_reporte}></img>
                    <img src={Icon_reporte}></img>

                </div>
            </div>
        </section>

    )
}

export default Notificaciones_prefecto