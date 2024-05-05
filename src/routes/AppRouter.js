import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Inicio } from '../pages/Inicio'
import { Cursos } from '../pages/Cursos'
import { Participantes } from '../pages/Participantes'
import { NotFound } from '../pages/NotFound'
import { Layout } from '../components/Layout'
import { Inscripcion } from '../pages/Inscripcion'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/' Component={Inicio} />
                    <Route element={<PublicRoute />}>
                        <Route exact path='/login' Component={Login} />
                    </Route>

                    <Route element={<PrivateRoute />}>
                        <Route exact path='/cursos' Component={Cursos} />
                    </Route>

                    <Route element={<PrivateRoute hasRole="admin" />}>
                        <Route exact path='/participantes' Component={Participantes} />
                    </Route>

                    <Route element={<PrivateRoute />}>
                        <Route exact path='/cursos:idParticipante' Component={Inscripcion} />
                    </Route>

                    <Route path='*' Component={NotFound} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export { AppRouter }