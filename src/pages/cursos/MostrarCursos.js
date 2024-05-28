import React, { useEffect } from 'react';
import { useMostrarCursos } from './useMostrarCursos';

const MostrarCursos = () => {
  const { cursos, getCursos } = useMostrarCursos();

  useEffect(() => {
    getCursos();
  }, []);

  return (
    <>
      <h1 style={{ color: 'white' }} className='mt-5 bg-primary bg-gradient col-md-4'>Cursos Proximos...</h1>
      <div className="container">
        {cursos ? cursos.map((curso) => (
          <div key={curso.idCurso} className="row">
            <div className="col-md-12 text-center">
              <div className="shadow p-3 mb-5 bg-white rounded text-center">
                <div className="">
                  <h1 className='text-center'>{curso.curso}</h1>
                </div>
                <div className="">
                  <img src='https://www.crwflags.com/FOTW/images/s/sv_uso.gif' alt='Logo universidad de sonsonate' />
                </div>
                <div className="text-body-secondary">
                  Fecha de inicio: {curso.fechaInicio}
                </div>
                <div className="text-body-secondary">
                  Fecha de fin: {curso.fechaFinalizacion}
                </div>
                <div className="text-body-secondary">
                  Inversion: ${curso.precio}
                </div>
                <div className="">
                  <h3>Horarios:</h3>
                  {curso.horarios.map((horario, index) => (
                    <div key={index}>
                      <p>Días: {horario.dias} Hora de inicio: {horario.horaInicio} Hora de fin: {horario.horaFin}</p>
                    </div>
                  ))}
                </div>
                <button className='btn btn-success' onClick={() => onclick(1)}>Inscribirme</button>
              </div>
            </div>
          </div>
        )) : null}
      </div>
    </>
  );
};

export { MostrarCursos };
