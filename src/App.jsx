import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'

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
      </Routes>
    </>
  )
}

export default App
