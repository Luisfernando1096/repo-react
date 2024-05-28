import React from 'react'
import { useParams } from 'react-router-dom';

const Inscripcion = () => {
    const { idParticipante } = useParams();
    return (

        <div className='mt-5'>Inscripcion : {idParticipante}</div>
    )
}

export { Inscripcion }