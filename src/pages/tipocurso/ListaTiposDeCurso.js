import React, { useEffect } from 'react'
import { useListaListaTiposDeCurso } from './useListaTiposDeCurso';

const ListaTiposDeCurso = () => {

  const {
    getTiposCurso,
    tiposCurso,
    handleChange,
    crearDatos,
    titulo,
    tiposCursoSeleccionado,
    openModal,
    deleteOnClick,
    validarCampos } = useListaListaTiposDeCurso();

  useEffect(() => {
    getTiposCurso();
  }, [])

  return (
    <>
      <div className="mt-5 d-flex">
        <div className="p-2 flex-grow-1"><h1>Tipos de curso</h1></div>
        <div className="p-2">
          <button
            onClick={() => openModal(1)}
            className='btn btn-success'
            data-bs-toggle="modal"
            data-bs-target="#modalTipoCurso"
          >
            Agregar TipoCurso
          </button>
        </div>
      </div>
      <div className="table-responsive text-center">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Tipo</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tiposCurso ? tiposCurso.map((tipocurso) => (
              <tr key={tipocurso.idTipoCurso}>
                <th scope="row">{tipocurso.tipo}</th>
                <td>
                  <button
                    className='btn btn-primary'
                    data-bs-toggle="modal"
                    data-bs-target="#modalTipoCurso"
                    onClick={() => openModal(2, crearDatos(tipocurso))}
                  >
                    Editar
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={() => deleteOnClick(tipocurso.idTipoCurso)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            )) : null}
          </tbody>
        </table>
      </div>

      <div className="modal fade" id="modalTipoCurso" tabIndex="-1" aria-labelledby="modalTiposCursoLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalTiposCursoLabel">{titulo}</h1>
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
                  <label htmlFor="txtIdTipoCurso" className="form-label">IDTipoCurso</label>
                  <input
                    id='txtIdTipoCurso'
                    onChange={handleChange}
                    value={tiposCursoSeleccionado.idTipoCurso}
                    type="number"
                    className="form-control"
                    name="idTipoCurso"
                    disabled
                  />
                </div>
                <div className="col-md-5">
                  <label htmlFor="txtTipo" className="form-label">Tipo</label>
                  <input
                    id='txtTipo'
                    onChange={handleChange}
                    value={tiposCursoSeleccionado.tipo}
                    type="text"
                    className="form-control"
                    name="tipo"
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
  )
}

export {ListaTiposDeCurso}