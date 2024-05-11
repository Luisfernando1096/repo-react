import React, { useState } from 'react';
import { handleInputChange, Estado } from './Estado'; // Importa la función handleInputChange y el componente Estado desde su archivo

function EditarCursos({ curso }) {

    const [estadoCheckbox, setEstadoCheckbox] = useState(curso.activo);
    const { formValues, setFormValues } = Estado({ curso }); // Usa la función Estado para obtener el estado y la función setFormValues

    const handleCheckboxChange = () => {
        // Invierte el estado actual del checkbox
        setEstadoCheckbox(!estadoCheckbox);
    };


    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Editar curso</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form class="row g-3 needs-validation" novalidate>
                                <div class="col-md-6">
                                    <label for="txtCurso" class="form-label">Curso</label>
                                    <input type="text" value={curso.curso} class="form-control" id="txtCurso" required />
                                    <div class="invalid-feedback">
                                        Please provide a valid city.
                                    </div>
                                </div>
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
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        id="flexCheckChecked"
                                        onChange={handleCheckboxChange}
                                    />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        Activo
                                    </label>
                                </div>
                                <div class="col-md-4">
                                    <label for="validationCustomUsername" class="form-label">Username</label>
                                    <div class="input-group has-validation">
                                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                                        <input value={curso.curso} type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                        <div class="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="validationCustom03" class="form-label">City</label>
                                    <input type="text" class="form-control" id="validationCustom03" required />
                                    <div class="invalid-feedback">
                                        Please provide a valid city.
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <label for="validationCustom04" class="form-label">State</label>
                                    <select class="form-select" id="validationCustom04" required >
                                        <option selected disabled value="">Choose...</option>
                                        <option>...</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Please select a valid state.
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <label for="validationCustom05" class="form-label">Zip</label>
                                    <input type="text" class="form-control" id="validationCustom05" required />
                                    <div class="invalid-feedback">
                                        Please provide a valid zip.
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                        <label class="form-check-label" for="invalidCheck">
                                            Agree to terms and conditions
                                        </label>
                                        <div class="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="button" class="btn btn-primary">Guardar cambios</button>
                                    <hr />
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
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