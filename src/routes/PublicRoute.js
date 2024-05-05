import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../auth/useAuth';

function PublicRoute(){

    //const user = {id: 1, rol: "admin"}

    const { user } = useAuth();//Tenemos de forma global el usuario

    if(user) return <Navigate to='/cursos' />

    return (
        <Outlet />
    )
}

export { PublicRoute }