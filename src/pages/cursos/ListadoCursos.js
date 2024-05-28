import React, { useEffect } from 'react';
import { useLista } from './useLista';

function ListadoCursos() {
    const { cursos,
        getCursos,
        openModal,
        getTiposCurso,
        deleteOnClick,
        crearDatos } = useLista();

    useEffect(() => {
        getCursos();
        getTiposCurso();
    }, []);

    return (
        <>
            <div className="mt-5 d-flex">
                <div className="p-2 flex-grow-1"><h1>Cursos</h1></div>
                <div className="p-2">
                    <button
                        onClick={() => openModal(1)}
                        className='btn btn-success'
                    >
                        Agregar curso
                    </button>
                </div>
            </div>
            <div className="table-responsive text-center">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre del curso</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cursos ? cursos.map((curso) => (
                            <tr key={curso.idCurso}>
                                <th scope="row">{curso.idCurso}</th>
                                <td>{curso.curso}</td>
                                <td>
                                    <button
                                        className='btn btn-primary'
                                        onClick={() => openModal(2, crearDatos(curso))}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => deleteOnClick(curso.idCurso)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        )) : null}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export { ListadoCursos };
