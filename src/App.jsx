import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Ticket from './pages/Ticket'
import Merch from './pages/Merch'
import Blog from './pages/Blog'
import Admin from './pages/Admin'
import Events from './pages/Events'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Help from './pages/Help'
import About from './pages/About'
import Requireauth from './pages/Requireauth'
import Persistlogin from './components/persistlogin'
function App() {

  return (
   <Routes>
    <Route element={<Persistlogin />}>
     <Route path='/' element={<Home />} />
    <Route  element={<Layout />}>
    <Route path='/login' element={<Login />}/>
    <Route path='/register' element={<Register />} />
    <Route path='/help' element={<Help />} />
    <Route path='/blog' element={<Blog />} />
    <Route path='/merch' element={<Merch />} />
    <Route path='/about' element={<About />} />
    <Route element={<Requireauth />}>
    <Route path='events' element={<Events />} />
    <Route path='ticket' element={<Ticket />}/>
    </Route>
   
    <Route path='/admin' element={<Admin />} />
    </Route>

    </Route>
   </Routes>
      )
}

export default App

