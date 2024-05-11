import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PublicRoute() {

    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);


    if (user) return <Navigate to='/cursos' />

    return (
        <Outlet />
    )
}

export { PublicRoute }