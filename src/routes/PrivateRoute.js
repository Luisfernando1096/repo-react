import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../auth/useAuth';

function PrivateRoute({ hasRole: rol }) {

    const { user } = useAuth();
    /*const user = {
        id: 1,
        rol: 'admin'
    }*/

    if (!user) return <Navigate to='/login' />
    if (rol && user?.rol !== rol) return <Navigate to='/' />

    return (
        <Outlet />
    )
}

export { PrivateRoute }