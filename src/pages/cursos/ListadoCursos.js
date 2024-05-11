import React, { useState } from 'react';
import { EditarCursos } from './EditarCursos';

function ListadoCursos() {
    const [cursoSeleccionado, setCursoSeleccionado] = useState([]);

    const cursos = [{
        idCurso: 1,
        curso: "JAVA DESDE CERO",
        activo: true,
        precio: '60.00',
        idTipoCurso: 1,
        fechaInicio: '2024/05/11',
        lugar: 'USO',
        modalidad: 'Presencial',
        fechaFinalizacion: '2024/10/11',
        instructor: 'Juan Perez'
    },
    {
        idCurso: 1,
        curso: "REACT DESDE CERO",
        activo: false,
        precio: '120.00',
        idTipoCurso: 2,
        fechaInicio: '2024/05/11',
        lugar: 'USO',
        modalidad: 'Virtual',
        fechaFinalizacion: '2024/10/11',
        instructor: 'Mario Diaz'
    }];

    const handleEditar = (curso) => {
        setCursoSeleccionado(curso);
    };

    return (
        <>
            <div className="mt-5 d-flex">
                <div className="p-2 flex-grow-1"><h1>Cursos</h1></div>
                <div className="p-2"><button className='btn btn-success' data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">Agregar curso</button></div>
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
                        {cursos.map(curso => (
                            <tr key={curso.idCurso}>
                                <th scope="row">{curso.idCurso}</th>
                                <td>{curso.curso}</td>
                                <td>{curso.activo.toString()}</td>
                                <td>
                                    <button
                                        className='btn btn-primary'
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => handleEditar(curso)}
                                    >
                                        Editar
                                    </button>
                                    <EditarCursos curso={cursoSeleccionado} /> {/* Pasar el objeto completo curso a EditarCursos */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export { ListadoCursos };
