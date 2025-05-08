import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import TipoRegistro from './components/TipoRegistro'
import PrestadorPersonal from './components/InformacionPrestador'
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {

  return (
    <>
      <Routes>
        <Route
        path="/home"
        element={<Home/>}/>
        <Route
        path="/login"
        element={<Login/>}/>
        <Route
        path="/tipo"
        element={<TipoRegistro/>}/>
        <Route
        path="/info-prestador"
        element={<PrestadorPersonal/>}/>
      </Routes>
    </>
  )
}

export default App
