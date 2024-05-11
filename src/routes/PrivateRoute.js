import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute({ hasRole: rol }) {

    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);


    if (!user) return <Navigate to='/login' />
    if (rol && user?.rol !== rol) return <Navigate to='/' />

    return (
        <Outlet />
    )
}

export { PrivateRoute }