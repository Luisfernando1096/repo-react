import React, { useEffect } from 'react';
import { useLista } from '../municipios/useLista';

const ListaMunicipios = () => {

  const {
    getMunicipios,
    municipios,
    handleChange,
    crearDatos,
    titulo,
    municipioSeleccionado,
    openModal,
    deleteOnClick,
    validarCampos,
    departamentos
  } = useLista();

  useEffect(() => {
    getMunicipios();
  }, []);

  return (
    <>
      <div className="mt-5 d-flex">
        <div className="p-2 flex-grow-1"><h1>Municipios</h1></div>
        <div className="p-2">
          <button
            onClick={() => openModal(1)}
            className='btn btn-success'
            data-bs-toggle="modal"
            data-bs-target="#modalMunicipios"
          >
            Agregar Municipio
          </button>
        </div>
      </div>
      <div className="table-responsive text-center">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Municipio</th>
              <th scope="col">Código</th>
              <th scope="col">Departamento</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {municipios ? municipios.map((municipio) => (
              <tr key={municipio.idMunicipio}>
                <th scope="row">{municipio.idMunicipio}</th>
                <td>{municipio.municipio}</td>
                <td>{municipio.codigo}</td>
                <td>{municipio.nombreDepartamento}</td>
                <td>
                  <button
                    className='btn btn-primary'
                    data-bs-toggle="modal"
                    data-bs-target="#modalMunicipios"
                    onClick={() => openModal(2, crearDatos(municipio))}
                  >
                    Editar
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={() => deleteOnClick(municipio.idMunicipio)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            )) : null}
          </tbody>
        </table>
      </div>

      <div className="modal fade" id="modalMunicipios" tabIndex="-1" aria-labelledby="modalMunicipiosLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalMunicipiosLabel">{titulo}</h1>
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
                  <label htmlFor="txtIdMunicipio" className="form-label">ID</label>
                  <input
                    id='txtIdMunicipio'
                    onChange={handleChange}
                    value={municipioSeleccionado.idMunicipio}
                    type="number"
                    className="form-control"
                    name="idMunicipio"
                    disabled
                  />
                </div>
                <div className="col-md-5">
                  <label htmlFor="txtMunicipio" className="form-label">Municipio</label>
                  <input
                    id='txtMunicipio'
                    onChange={handleChange}
                    value={municipioSeleccionado.municipio}
                    type="text"
                    className="form-control"
                    name="municipio"
                    required
                  />
                </div>
                <div className="col-md-5">
                  <label htmlFor="txtCodigo" className="form-label">Código</label>
                  <input
                    id='txtCodigo'
                    onChange={handleChange}
                    value={municipioSeleccionado.codigo}
                    type="text"
                    className="form-control"
                    name="codigo"
                    required
                  />
                </div>
                <div className="col-md-5">
                  <label htmlFor="txtIdDepartamento" className="form-label">Departamento</label>
                  <select
                    id='txtIdDepartamento'
                    onChange={handleChange}
                    value={municipioSeleccionado.idDepartamento}
                    className="form-control"
                    name="idDepartamento"
                    required
                  >
                    <option value="">Seleccione un Departamento</option>
                    {departamentos.map(departamento => (
                      <option key={departamento.idDepartamento} value={departamento.idDepartamento}>
                        {departamento.departamento}
                      </option>
                    ))}
                  </select>
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
};

export { ListaMunicipios };

