import React from 'react'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Ranking from './pages/Ranking'
import Jornadas from './pages/Jornadas'
import Signin from './pages/Signin'
import Signup from './pages/Signup'


function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/sobre' exact element={<Sobre/>} />
                <Route path='/ranking' exact element={<Ranking/>} />
                <Route path='/jornadas' exact element={<Jornadas/>} />
                <Route path='/signin' exact element={<Signin/>} />
                <Route path='/signup' exact element={<Signup/>} />

            </Routes>
            
        </BrowserRouter>
    )
}

export default Rotas;