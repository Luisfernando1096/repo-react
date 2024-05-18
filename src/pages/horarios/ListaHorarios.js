import React, { useEffect } from 'react'
import { useLista } from '../horarios/useLista'

const ListaHorarios = () => {

  const {
    getHorarios,
    horarios,
    handleChange,
    crearDatos,
    titulo,
    horarioSeleccionado,
    openModal,
    deleteOnClick,
    validarCampos } = useLista();

  useEffect(() => {
    getHorarios();
  }, [])

  return (
    <>
      <div className="mt-5 d-flex">
        <div className="p-2 flex-grow-1"><h1>Horarios</h1></div>
        <div className="p-2">
          <button
            onClick={() => openModal(1)}
            className='btn btn-success'
            data-bs-toggle="modal"
            data-bs-target="#modalHorarios"
          >
            Agregar Horario
          </button>
        </div>
      </div>
      <div className="table-responsive text-center">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Dia</th>
              <th scope="col">Estado</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {horarios ? horarios.map((horario) => (
              <tr key={horario.idHorario}>
                <th scope="row">{horario.dia}</th>
                <td>{horario.horaInicio}</td>
                <td>
                  <button
                    className='btn btn-primary'
                    data-bs-toggle="modal"
                    data-bs-target="#modalHorarios"
                    onClick={() => openModal(2, crearDatos(horario))}
                  >
                    Editar
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={() => deleteOnClick(horario.idHorario)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            )) : null}
          </tbody>
        </table>
      </div>

      <div className="modal fade" id="modalHorarios" tabIndex="-1" aria-labelledby="modalHorariosLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalHorariosLabel">{titulo}</h1>
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
                  <label htmlFor="txtIdHorario" className="form-label">IDHorario</label>
                  <input
                    id='txtIdHorario'
                    onChange={handleChange}
                    value={horarioSeleccionado.idHorario}
                    type="number"
                    className="form-control"
                    name="idHorario"
                    disabled
                  />
                </div>
                <div className="col-md-5">
                  <label htmlFor="txtDia" className="form-label">Dia</label>
                  <input
                    id='txtDia'
                    onChange={handleChange}
                    value={horarioSeleccionado.dia}
                    type="text"
                    className="form-control"
                    name="dia"
                    required
                  />
                </div>
                <div className="col-md-5">
                  <label htmlFor="txtHoraInicio" className="form-label">HoraInicio</label>
                  <input
                    id='txtHoraInicio'
                    onChange={handleChange}
                    value={horarioSeleccionado.horaInicio}
                    type="time"
                    className="form-control"
                    name="horaInicio"
                    required
                  />
                </div>
                <div className="col-md-5">
                  <label htmlFor="txtHoraFin" className="form-label">HoraFin</label>
                  <input
                    id='txtHoraFin'
                    onChange={handleChange}
                    value={horarioSeleccionado.horaFin}
                    type="time"
                    className="form-control"
                    name="horaFin"
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

export {ListaHorarios}