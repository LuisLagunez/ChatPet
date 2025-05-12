import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import TipoRegistro from './components/TipoRegistro'
import PrestadorPersonal from './components/InformacionPrestador'
import ClientePersonal from './components/InformacionCliente'
import Dashboard from './components/prestador/Dashboard'
import DashboardCliente from './components/cliente/DashboardCliente'
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {

  return (
    <>
      <Routes>
        <Route
        path="/login"
        element={<Login/>}/>
        <Route
        path="/tipo"
        element={<TipoRegistro/>}/>
        <Route
        path="/info-prestador"
        element={<PrestadorPersonal/>}/>
        <Route
        path="/info-dueño"
        element={<ClientePersonal/>}/>
        <Route
        path="/dashboard"
        element={<Dashboard/>}/>
        <Route
        path="/dashboard-cliente"
        element={<DashboardCliente/>}/>
      </Routes>
    </>
  )
}

export default App
