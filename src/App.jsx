import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import TipoRegistro from './components/TipoRegistro'

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
      </Routes>
    </>
  )
}

export default App
