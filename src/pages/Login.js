import React, { useEffect } from 'react'
import { gapi } from 'gapi-script';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const clientId = "176492661084-uv08kmj2c463l4s6gdhh7kifm3dfa3uj.apps.googleusercontent.com";
  const navegar = useNavigate();

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientId,

      })
    }
    gapi.load("client:auth2", start)
  }, [])


  const responseMessage = (response) => {
    const userString = JSON.stringify(response.profileObj);
    localStorage.setItem('user', userString);
    navegar('/cursos');
    //window.location.reload();
    console.log(response.profileObj);
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="row">
          <div className="col-md-12 text-center">

            <div className="shadow p-3 mb-5 bg-white rounded text-center">
              <div className="">
                <h1 className='text-center'>Inicio de sesión</h1>
              </div>
              <div className="">
                <img src='https://www.crwflags.com/FOTW/images/s/sv_uso.gif' alt='Logo universidad de sonsonate' />
                <br />
                <GoogleLogin clientId={clientId} onSuccess={responseMessage} onError={errorMessage} cookiePolicy='single_host_origin' />
              </div>
              <div className="text-body-secondary">
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