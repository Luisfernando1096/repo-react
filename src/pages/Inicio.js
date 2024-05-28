import React from 'react'
import { useNavigate } from 'react-router-dom'

const Inicio = () => {
  const navegar = useNavigate();

  const onclick = (id) => {
    navegar(`/cursos/${id}`);//Enviar parametros por url
  }

  return (
    <>
      <h1 style={{ color: 'white' }} className='mt-5 bg-primary bg-gradient col-md-4'>Cursos Proximos...</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">

            <div className="shadow p-3 mb-5 bg-white rounded text-center">
              <div className="">
                <h1 className='text-center'>Inicio de sesión</h1>
              </div>
              <div className="">
                <img src='https://www.crwflags.com/FOTW/images/s/sv_uso.gif' alt='Logo universidad de sonsonate' />
              </div>
              <div className="text-body-secondary">
                Universidad de Sonsonate
              </div>
              <button className='btn btn-success' onClick={() => onclick(1)}>Inscribirme</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">

            <div className="shadow p-3 mb-5 bg-white rounded text-center">
              <div className="">
                <h1 className='text-center'>Inicio de sesión</h1>
              </div>
              <div className="">
                <img src='https://www.crwflags.com/FOTW/images/s/sv_uso.gif' alt='Logo universidad de sonsonate' />
              </div>
              <div className="text-body-secondary">
                Universidad de Sonsonate
              </div>
              <button className='btn btn-success'>Inscribirme</button>
            </div>
          </div>
        </div>
        
      </div>
    </>

  )
}

export { Inicio }