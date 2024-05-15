import React, { useEffect, useState } from 'react';
import { EditarCursos } from './EditarCursos';
import { useApp } from '../../tools/useApp';

function ListadoCursos() {
    const { cursos, postOnClick, putOnClick, deleteOnClick, getCursos } = useApp()

    const [cursoSeleccionado, setCursoSeleccionado] = useState([]);

    useEffect(() => {
        getCursos();
    }, [])

    const handleEditar = (curso) => {
        setCursoSeleccionado(curso);
    };

    return (
        <>
            <div className="mt-5 d-flex">
                <div className="p-2 flex-grow-1"><h1>Cursos</h1></div>
                <div className="p-2"><button className='btn btn-success' data-bs-toggle="modal"
                    data-bs-target="#exampleModal">Agregar curso</button>
                </div>
            </div>
            <div className="table-responsive text-center">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre del curso</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cursos ? cursos.map((curso) => {
                            return <tr key={curso.idCurso}>
                                <th scope="row">{curso.idCurso}</th>
                                <td>{curso.curso}</td>
                                <td>
                                    <button
                                        className='btn btn-primary'
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => handleEditar(curso)}
                                    >
                                        Editar
                                    </button>
                                   {/*<EditarCursos curso={cursoSeleccionado} />*/}
                                </td>
                            </tr>
                        }) : null}
                    </tbody>
                </table>
                <button onClick={postOnClick}>Agregar</button>
                <button onClick={putOnClick}>Put</button>
                <button onClick={deleteOnClick}>Delete</button>
            </div>
        </>
    );
}

export { ListadoCursos };
