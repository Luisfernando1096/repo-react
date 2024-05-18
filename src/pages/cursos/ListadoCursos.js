import React, { useEffect } from 'react';
import { useLista } from './useLista';

function ListadoCursos() {
    const { cursos,
        getCursos,
        cursoSeleccionado,
        titulo,
        validarCampos,
        handleChange,
        openModal,
        getTiposCurso,
        tiposCurso,
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
                        data-bs-toggle="modal"
                        data-bs-target="#modalCursos"
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
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalCursos"
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

            <div className="modal fade" id="modalCursos" tabIndex="-1" aria-labelledby="modalCursosLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modalCursosLabel">{titulo}</h1>
                            <button
                                type="button"
                                id='btnCerrarModal'
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3 needs-validation" noValidate>
                                <div className="col-md-3">
                                    <label htmlFor="txtIdCurso" className="form-label">IDCurso</label>
                                    <input
                                        id='txtIdCurso'
                                        onChange={handleChange}
                                        value={cursoSeleccionado.idCurso}
                                        type="number"
                                        className="form-control"
                                        name="idCurso"
                                        disabled
                                    />
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="txtCurso" className="form-label">Curso</label>
                                    <input
                                        id='txtCurso'
                                        onChange={handleChange}
                                        value={cursoSeleccionado.curso}
                                        type="text"
                                        className="form-control"
                                        name="curso"
                                        required
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="txtPrecio" className="form-label">Precio</label>
                                    <input
                                        id='txtPrecio'
                                        onChange={handleChange}
                                        value={cursoSeleccionado.precio}
                                        type="number"
                                        className="form-control"
                                        name="precio"
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="txtIdTipoCurso" className="form-label">TipoCurso</label>
                                    <select
                                        id='txtIdTipoCurso'
                                        onChange={handleChange}
                                        value={cursoSeleccionado.idTipoCurso}
                                        className="form-control"
                                        name="idTipoCurso"
                                        required
                                    >
                                        <option value="">Seleccione un tipo de curso</option>
                                        {tiposCurso ? tiposCurso.map(tipo => (
                                            <option key={tipo.idTipoCurso} value={tipo.idTipoCurso}>{tipo.tipo}</option>
                                        )) : null}
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="txtFechaInicio" className="form-label">Fecha Inicio</label>
                                    <input
                                        id='txtFechaInicio'
                                        onChange={handleChange}
                                        value={cursoSeleccionado.fechaInicio.split('T')[0]}
                                        type="date"
                                        className="form-control"
                                        name="fechaInicio"
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="txtFechaFin" className="form-label">Fecha Finalizacion</label>
                                    <input
                                        id='txtFechaFin'
                                        onChange={handleChange}
                                        value={cursoSeleccionado.fechaFinalizacion.split('T')[0]}
                                        type="date"
                                        className="form-control"
                                        name="fechaFinalizacion"
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="txtLugar" className="form-label">Lugar</label>
                                    <input
                                        id='txtLugar'
                                        onChange={handleChange}
                                        value={cursoSeleccionado.lugar}
                                        type="text"
                                        className="form-control"
                                        name="lugar"
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="txtModalidad" className="form-label">Modalidad</label>
                                    <input
                                        id='txtModalidad'
                                        onChange={handleChange}
                                        value={cursoSeleccionado.modalidad}
                                        type="text"
                                        className="form-control"
                                        name="modalidad"
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="txtInstructor" className="form-label">Instructor</label>
                                    <input
                                        id='txtInstructor'
                                        onChange={handleChange}
                                        value={cursoSeleccionado.instructor}
                                        type="text"
                                        className="form-control"
                                        name="instructor"
                                        required
                                    />
                                </div>
                                <div className="col-12">
                                    <button type="button" className="btn btn-primary" onClick={validarCampos}>Guardar cambios</button>
                                    <hr />
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { ListadoCursos };
