import React from 'react'
import { Button } from 'react-bootstrap'
import { useAuth } from '../auth/useAuth'

const Login = () => {

  const { setUser } = useAuth();

  const adduser = () => {
    setUser({ id: 1, rol: 'participante' });
  }

  return (
    <>

      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="row">
          <div className="col-md-12 text-center">

            <div className="card text-center">
              <div className="card-header">
                <h1 className='text-center'>Inicio de sesión</h1>
              </div>
              <div className="card-body">
                <h5 className="card-title">Puede elegir una cuenta para autenticarse</h5>
                <p className="card-text">Tenga en cuenta que la aplicación tomara informacion para una mejor experiencia.</p>
                <Button className='btn btn-success' onClick={adduser}>Ingresar</Button>
              </div>
              <div className="card-footer text-body-secondary">
                Universidad de Sonsonate
              </div>
            </div>

          </div>
        </div>
      </div>

    </>

  )
}

export { Login }