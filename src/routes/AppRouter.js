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
import { ListadoCursos } from '../pages/cursos/ListadoCursos'
import { ListaHorarios } from '../pages/horarios/ListaHorarios'
import { ListaTiposDeCurso } from '../pages/tipocurso/ListaTiposDeCurso'
import { DataContextProvider } from '../contexts/DataContext'
import { GestionCursos } from '../pages/cursos/GestionCursos'
import { MostrarCursos } from '../pages/cursos/MostrarCursos'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/' Component={MostrarCursos} />
                    <Route element={<PublicRoute />}>
                        <Route exact path='/login' Component={Login} />
                    </Route>

                    <Route element={<PrivateRoute hasRole="admin" />}>
                        <Route exact path='/participantes' Component={Participantes} />
                    </Route>

                    <Route element={<PrivateRoute hasRole="admin" />}>
                        <Route exact path='/cursos' Component={ListadoCursos} />
                    </Route>

                    <Route element={<PrivateRoute hasRole="admin" />}>
                        <Route exact path='/cursosgestion' Component={GestionCursos} />
                    </Route>

                    <Route element={<PrivateRoute />}>
                        <Route exact path='/cursos/:idParticipante' Component={Inscripcion} />
                    </Route>

                    <Route path='*' Component={NotFound} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export { AppRouter }