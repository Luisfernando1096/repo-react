import React, { useState } from 'react';
import { handleInputChange, Estado } from './Estado'; // Importa la función handleInputChange y el componente Estado desde su archivo

function EditarCursos({ curso }) {

    const [estadoCheckbox, setEstadoCheckbox] = useState(true);
    const { formValues, setFormValues } = Estado({ curso }); // Usa la función Estado para obtener el estado y la función setFormValues

    const handleCheckboxChange = () => {
        // Invierte el estado actual del checkbox
        setEstadoCheckbox(!estadoCheckbox);
    };


    return (
        <>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Editar curso</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3 needs-validation" novalidate>
                                
                                <div className="col-md-6">
                                    <label htmlFor="txtCurso" className="form-label">Curso</label>
                                    <input type="text" value={formValues.curso} className="form-control" name="curso" onChange={(event) => handleInputChange(event, formValues, setFormValues)} required />
                                    <div className="invalid-feedback">
                                        Please provide a valid city.
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="txtInstructor" className="form-label">Instructor</label>
                                    <input type="text" value={formValues.instructor} className="form-control" name="instructor" onChange={(event) => handleInputChange(event, formValues, setFormValues)} required />
                                    <div className="invalid-feedback">
                                        Please provide a valid city.
                                    </div>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="flexCheckChecked"
                                        onChange={handleCheckboxChange}
                                        checked = {curso.activo}
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        Activo
                                    </label>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                        <input value={curso.curso} type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                        <div className="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="validationCustom03" className="form-label">City</label>
                                    <input type="text" className="form-control" id="validationCustom03" required />
                                    <div className="invalid-feedback">
                                        Please provide a valid city.
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="validationCustom04" className="form-label">State</label>
                                    <select className="form-select" id="validationCustom04" required >
                                        <option selected disabled value="">Choose...</option>
                                        <option>...</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid state.
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="validationCustom05" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="validationCustom05" required />
                                    <div className="invalid-feedback">
                                        Please provide a valid zip.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                        <label className="form-check-label" htmlFor="invalidCheck">
                                            Agree to terms and conditions
                                        </label>
                                        <div className="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="button" className="btn btn-primary">Guardar cambios</button>
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

export { EditarCursos }