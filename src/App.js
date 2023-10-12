import './App.css';
import Presentacion from './components/presentacion.js'
import Elegir_Usuario from './components/elegir-usuario.js'
import Login_Administrador from './components/login-administrador.js'
import Alumno from './components/alumno.js'
import Buscador from './components/buscador';
import Notificaciones_prefecto from './components/notificaciones-prefecto';
import Boton_agregar from './components/boton-agregar';
import Menu_agregar from './components/menu-agregar';
import Cabecera from './components/cabecera';
import Menu_horizontal from './components/menu-horizontal';
import Formulario_Reporte from './components/formulario-reporte';
import Datos_Alumno from './components/datos-alumno';
import Formulario_Citatorio from './components/formulario-citatorio';
import Formulario_Falta from './components/formulario-falta';
import Formulario_Retardo from './components/formulario-retardo';
import Formulario_Tarea from './components/formulario-tarea';
import Formulario_Fai from './components/formulario-fai';
import Formulario_Fvd from './components/formulario-fvd';
import Formulario_Alumno from './components/formulario-alumno';
import Inicio from './pages/inicio'
import Login_AdministradorP from './pages/login-administrador';
import Login_TutorP from './pages/login-tutor';
import { Route, Routes } from 'react-router-dom';

import Prefecto from './pages/prefecto';
import Agregar_Reporte from './pages/agregar-reporte';
import Agregar_Citatorio from './pages/agregar-citatorio';
import Agregar_Falta from './pages/agregar-falta';
import Agregar_Retardo from './pages/agregar-retardo';
import Agregar_Justificacion from './pages/agregar-justificacion';
import Agregar_Tarea from './pages/agregar-tarea-atrasada';

import Orientadora from './pages/orientadora';

import Directora from './pages/directora';
import Agregar_FAI from './pages/agregar-fai';
import Agregar_FVD from './pages/agregar-fvd';


const App = () => {
  return (
    <div className="App">
      <Routes>

        {/*--------------------------------------------------------------*/}
        {/*------------------------RUTAS PRINCIPALES---------------------*/}
        {/*--------------------------------------------------------------*/}        
        <Route path='/' element={<Inicio/>}/>
        <Route path='administrador' element={<Login_AdministradorP/>}/> 
        <Route path='tutor' element={<Login_TutorP/>}/>


      

        {/*--------------------------------------------------------------*/}
        {/*------------------------RUTAS PREFECTO------------------------*/}
        {/*--------------------------------------------------------------*/}
        <Route path='administrador/prefecto' element={<Prefecto/>}></Route>
        <Route path='administrador/prefecto/agregar-reporte' element={<Agregar_Reporte/>}></Route>
        <Route path='administrador/prefecto/agregar-citatorio' element={<Agregar_Citatorio/>}></Route>
        <Route path='administrador/prefecto/agregar-falta' element={<Agregar_Falta/>}></Route>
        <Route path='administrador/prefecto/agregar-retardo' element={<Agregar_Retardo/>}></Route>
        <Route path='administrador/prefecto/agregar-justificacion' element={<Agregar_Justificacion/>}></Route>
        <Route path='administrador/prefecto/agregar-tarea-atrasada' element={<Agregar_Tarea/>}></Route>


        {/*--------------------------------------------------------------*/}
        {/*------------------------RUTAS ORIENTADORA---------------------*/}
        {/*--------------------------------------------------------------*/}
        <Route path='administrador/orientadora' element={<Orientadora/>}></Route>
        <Route path='administrador/orientadora/agregar-fai' element={<Agregar_FAI/>}></Route>
        <Route path='administrador/orientadora/agregar-fvd' element={<Agregar_FVD/>}></Route>



        {/*--------------------------------------------------------------*/}
        {/*------------------------RUTAS DIRECTORA-----------------------*/}
        {/*--------------------------------------------------------------*/}
        <Route path='administrador/directora' element={<Directora/>}></Route>

        {/*--------------------------------------------------------------*/}
        {/*--------------------------RUTAS 404---------------------------*/}
        {/*--------------------------------------------------------------*/}  
        <Route path='*' element={<div>NO EXISTE</div>}/>
         

      </Routes>
      
      {/*<Prefecto/>*/}
    </div>
  )
}

export default App;