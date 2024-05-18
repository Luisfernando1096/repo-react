import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../auth/useAuth';

function PublicRoute() {

    //const { user, token, isLogued, login, logout } = useAuth();
    const user = {
        id: 1,
        rol: 'admin'
    }

    if (user) return <Navigate to='/cursos' />

    return (
        <Outlet />
    )
}

export { PublicRoute }