import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navegar = useNavigate();

  const responseMessage = () => {
    // Definir el objeto que quieres guardar
    const user = [
      {
        id: 1,
        rol: "admin"
      }
    ];

    // Convertir el objeto a una cadena JSON
    const userJSON = JSON.stringify(user);

    // Guardar la cadena JSON en localStorage
    localStorage.setItem('user', userJSON);

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
