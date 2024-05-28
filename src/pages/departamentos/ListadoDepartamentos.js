import React, { useEffect } from 'react'
import { useLista } from '../departamentos/useLista'

const ListaDepartamentos = () => {

  const {
    getDepartamentos,
    departamentos,
    handleChange,
    crearDatos,
    titulo,
    departamentoSeleccionado,
    openModal,
    deleteOnClick,
    validarCampos
  } = useLista();

  useEffect(() => {
    getDepartamentos();
  }, [])

  return (
    <>
      <div className="mt-5 d-flex">
        <div className="p-2 flex-grow-1"><h1>Departamentos</h1></div>
        <div className="p-2">
          <button
            onClick={() => openModal(1)}
            className='btn btn-success'
            data-bs-toggle="modal"
            data-bs-target="#modalDepartamentos"
          >
            Agregar Departamento
          </button>
        </div>
      </div>
      <div className="table-responsive text-center">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Departamento</th>
              <th scope="col">Código</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {departamentos ? departamentos.map((departamento) => (
              <tr key={departamento.idDepartamento}>
                <th scope="row">{departamento.idDepartamento}</th>
                <td>{departamento.departamento}</td>
                <td>{departamento.codigo}</td>
                <td>
                  <button
                    className='btn btn-primary'
                    data-bs-toggle="modal"
                    data-bs-target="#modalDepartamentos"
                    onClick={() => openModal(2, crearDatos(departamento))}
                  >
                    Editar
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={() => deleteOnClick(departamento.idDepartamento)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            )) : null}
          </tbody>
        </table>
      </div>

      <div className="modal fade" id="modalDepartamentos" tabIndex="-1" aria-labelledby="modalDepartamentosLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalDepartamentosLabel">{titulo}</h1>
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
                  <label htmlFor="txtIdDepartamento" className="form-label">ID</label>
                  <input
                    id='txtIdDepartamento'
                    onChange={handleChange}
                    value={departamentoSeleccionado.idDepartamento}
                    type="number"
                    className="form-control"
                    name="idDepartamento"
                    disabled
                  />
                </div>
                <div className="col-md-5">
                  <label htmlFor="txtDepartamento" className="form-label">Departamento</label>
                  <input
                    id='txtDepartamento'
                    onChange={handleChange}
                    value={departamentoSeleccionado.departamento}
                    type="text"
                    className="form-control"
                    name="departamento"
                    required
                  />
                </div>
                <div className="col-md-5">
                  <label htmlFor="txtCodigo" className="form-label">Código</label>
                  <input
                    id='txtCodigo'
                    onChange={handleChange}
                    value={departamentoSeleccionado.codigo}
                    type="text"
                    className="form-control"
                    name="codigo"
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

export { ListaDepartamentos }
