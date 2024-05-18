import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

const Login = () => {
  const navegar = useNavigate();
  const { user, token, isLogued, login, logout } = useAuth();

  const responseMessage = () => {
    // Definir el objeto que quieres guardar
    const user = 
      {
        id: 1,
        rol: "admin"
      }
    ;

    //Definir el token
    const token = 'hsdgsf';

    // Convertir el objeto a una cadena JSON
    //const userJSON = JSON.stringify(user);

    login(user, token);

    navegar("/cursos");
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="shadow p-3 mb-5 bg-white rounded text-center">
            <div>
              <h1 className='text-center'>Inicio de sesión</h1>
            </div>
            <div>
              <img src='https://www.crwflags.com/FOTW/images/s/sv_uso.gif' alt='Logo universidad de sonsonate' />
              <br />
              <button className='btn btn-succsess'
                onClick={responseMessage}
              >iniciar sesion</button>
            </div>
            <div className="text-body-secondary">
              Universidad de Sonsonate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Login };
