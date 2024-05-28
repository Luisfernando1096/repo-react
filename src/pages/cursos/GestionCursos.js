import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useLista } from './useLista';

const GestionCursos = () => {

    const { iracursos, cursoSeleccionado, setOperacion, setCursoSeleccionado, handleChange, validarCampos, tiposCurso, getTiposCurso } = useLista();
    const location = useLocation();
    const { curso, operacion } = location.state || {};

    useEffect(() => {
        getTiposCurso();
        (operacion) ? setOperacion(operacion) : setOperacion(1);
        (curso) ? setCursoSeleccionado(curso) : setCursoSeleccionado(null)
    }, [operacion, curso]);

    return (
        <div className='container mt-5'>
            <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-3">
                    <label htmlFor="txtIdCurso" className="form-label">IDCurso</label>
                    <input
                        id='txtIdCurso'
                        onChange={handleChange}
                        value={(cursoSeleccionado) ? cursoSeleccionado.idCurso : ''}
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
                        value={(cursoSeleccionado) ? cursoSeleccionado.curso : ''}
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
                        value={(cursoSeleccionado) ? cursoSeleccionado.precio : ''}
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
                        value={(cursoSeleccionado) ? cursoSeleccionado.idTipoCurso : ''}
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
                    <label htmlFor="txtLugar" className="form-label">Lugar</label>
                    <input
                        id='txtLugar'
                        onChange={handleChange}
                        value={(cursoSeleccionado) ? cursoSeleccionado.lugar : ''}
                        type="text"
                        className="form-control"
                        name="lugar"
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="txtFechaInicio" className="form-label">Fecha Inicio</label>
                    <input
                        id='txtFechaInicio'
                        onChange={handleChange}
                        value={(cursoSeleccionado) ? cursoSeleccionado.fechaInicio.split('T')[0] : ''}
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
                        value={(cursoSeleccionado) ? cursoSeleccionado.fechaFinalizacion.split('T')[0] : ''}
                        type="date"
                        className="form-control"
                        name="fechaFinalizacion"
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="txtModalidad" className="form-label">Modalidad</label>
                    <input
                        id='txtModalidad'
                        onChange={handleChange}
                        value={(cursoSeleccionado) ? cursoSeleccionado.modalidad : ''}
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
                        value={(cursoSeleccionado) ? cursoSeleccionado.instructor : ''}
                        type="text"
                        className="form-control"
                        name="instructor"
                        required
                    />
                </div>
                <div className="col-12">
                    <button type="button" className="btn btn-primary" onClick={validarCampos}>Guardar cambios</button>
                    <hr />
                    <button type="button" className="btn btn-danger" onClick={iracursos}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export { GestionCursos }