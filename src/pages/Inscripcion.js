import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Inscripcion = () => {
    const [profesionOrOficio, setProfesionOrOficio] = useState('no');

    const handleProfesionOrOficioChange = (e) => {
        setProfesionOrOficio(e.target.value);
    };

    const [alergico, setAlergico] = useState('no');

    const handleAlergico = (e) => {
        setAlergico(e.target.value);
    };

    return (

        <div className="container mt-5">
            <div className="d-flex mb-4">
                <h1 className="flex-grow-1">Ficha de registro</h1>
            </div>
            <div className="row mb-3">
                <div className="col-md-3 mb-3">
                    <label htmlFor="nombreDiplomado" className="form-label">Nombre del diplomado:</label>
                    <input type="text" id="nombreDiplomado" name="nombreDiplomado" className="form-control" />
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="horario" className="form-label">Horario:</label>
                    <input type="text" id="horario" name="horario" className="form-control" />
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="codigo" className="form-label">Código:</label>
                    <input type="text" id="codigo" name="codigo" className="form-control" />
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="expediente" className="form-label">Expediente:</label>
                    <input type="text" id="expediente" name="expediente" className="form-control" />
                </div>
            </div>
            {/* DEFINIR LUGAR Y FECHA DE NACIMIENTO*/}
            <div className="mb-3">
                <strong>Lugar y fecha de nacimiento</strong>
            </div>
            <div className="row mb-3">
                <div className="col-md-4 mb-3">
                    <label htmlFor="municipio" className="form-label">Municipio:</label>
                    <select id="municipio" name="municipio" className="form-select">
                        <option value="">Selecciona un municipio</option>
                        <option value="municipios">juayua</option>
                    </select>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="departamento" className="form-label">Departamento:</label>
                    <select id="departamento" name="departamento" className="form-select">
                        <option value="">Selecciona un departamento</option>
                        <option value="departamento">Morazan</option>
                    </select>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento:</label>
                    <input type="date" id="fechaNacimiento" name="fechaNacimiento" className="form-control" />
                </div>
            </div>
            {/*DATOS PERSONALES*/}
            <div className="mb-3">
                <strong>Datos Personales</strong>
            </div>
            <div className="row mb-3">
                <div className="col-md-3 mb-3">
                    <label htmlFor="nombres" className="form-label">Nombres:</label>
                    <input type="text" id="nombres" name="nombres" className="form-control" />
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="apellidos" className="form-label">Apellidos:</label>
                    <input type="text" id="apellidos" name="apellidos" className="form-control" />
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="dui" className="form-label">DUI:</label>
                    <input type="text" id="dui" name="dui" className="form-control" />
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="nit" className="form-label">NIT:</label>
                    <input type="text" id="nit" name="nit" className="form-control" />
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="carnetMinoridad" className="form-label">Carnet de Minoridad:</label>
                    <input type="text" id="carnetMinoridad" name="carnetMinoridad" className="form-control" />
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="nie" className="form-label">NIE:</label>
                    <input type="text" id="nie" name="nie" className="form-control" />
                </div>
                <div className="col-md-1 mb-3">
                    <label htmlFor="edad" className="form-label">Edad:</label>
                    <input type="text" id="edad" name="edad" className="form-control" />
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="genero" className="form-label">Genero:</label>
                    <select id="genero" name="genero" className="form-select">
                        <option value="">Seleccionar genero</option>
                        <option value="masculino">Maculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="femenino">Otro</option>
                    </select>
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="estadoFamiliar" className="form-label">Estado Civil:</label>
                    <select id="estadoFamiliar" name="estadoFamiliar" className="form-select">
                        <option value="">Selecciona un estado</option>
                        <option value="soltero">Soltero/a</option>
                        <option value="casado">Casado/a</option>
                        <option value="casado">Acompañado/a</option>
                        <option value="divorciado">Divorciado/a</option>
                    </select>
                </div>
            </div>
            {/* APARTADO PARA DOMICILIO*/}
            <div className="mb-3">
                <strong>Datos de Domicilio</strong>
            </div>
            <div className="row mb-3">
                <div className="col-md-3 mb-3">
                    <label htmlFor="direccion" className="form-label">Direccion:</label>
                    <input type="text" id="direccion" name="direccion" className="form-control" />
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="departamento" className="form-label">Departamento:</label>
                    <input type="text" id="departamento" name="departamento" className="form-control" />
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="telFijo" className="form-label">Tel fijo:</label>
                    <input type="text" id="telFijo" name="telFijo" className="form-control" />
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="telefono" className="form-label">Tel movil:</label>
                    <input type="text" id="telefono" name="telefono" className="form-control" />
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="correo" className="form-label">E-mail:</label>
                    <input type="text" id="correo" name="correo" className="form-control" />
                </div>
            </div>
            {/* APARTADO PARA DEFINIR PROFESION U OFICIO*/}
            <div className="mb-3">
                <strong>Profesión u Oficio</strong>
            </div>
            <div className="row mb-3">
                <div className="col-md-3 mb-3">
                    <label htmlFor="profesionOrOficio" className="form-label">¿Se dedica a alguna profesión u oficio?</label>
                    <select id="profesionOrOficio" name="profesionOrOficio" className="form-select" value={profesionOrOficio} onChange={handleProfesionOrOficioChange}>
                        <option value="no">No</option>
                        <option value="si">Sí</option>
                    </select>
                </div>
                {profesionOrOficio === 'si' && (
                    <div className="col-md-3 mb-3">
                        <label htmlFor="profesionOrOficioDesc" className="form-label">¿A que profesion u oficio se dedica?</label>
                        <input type="text" id="profesionOrOficioDesc" name="profesionOrOficioDesc" className="form-control" />
                    </div>
                )}
            </div>
            {/* APARTADO PARA DEFINIR SI ES ALERGICO A ALGUN INGREDIENTE */}
            <div className="mb-3">
                <strong>Alergico al contacto con ingredientes</strong>
            </div>
            <div className="row mb-3">
                <div className="col-md-3 mb-3">
                    <label htmlFor="padecimiento" className="form-label">¿Presenta algun tipo de alergias?</label>
                    <select id="padecimiento" name="padecimiento" className="form-select" value={alergico} onChange={handleAlergico}>
                        <option value="no">No</option>
                        <option value="si">Sí</option>
                    </select>
                </div>
                {alergico === 'si' && (
                    <div className="col-md-3 mb-3">
                        <label htmlFor="padecimiento" className="form-label">¿A que ingrediente es alergico?</label>
                        <input type="text" id="padecimiento" name="padecimiento" className="form-control" />
                    </div>
                )}
            </div>

            <div className="mb-3">
                <strong>IMPORTANTE: Porfavor brinde informacion de 1 persona, en caso que necesitemos comunicarnos con usted</strong>
            </div>
            <div className="row mb-3">
                <div className="col-md-3 mb-3">
                    <label htmlFor="nombres" className="form-label">Nombre Completo:</label>
                    <input type="text" id="nombres" name="nombres" className="form-control" />
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="parentesco" className="form-label">Parentesco:</label>
                    <input type="text" id="parentesco" name="parentesco" className="form-control" />
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="direccion" className="form-label">Direccion:</label> 
                    <input type="text" id="direccion" name="direccion" className="form-control" />
                </div>
                <div className="w-100"></div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="departamento" className="form-label">Departamento:</label>
                    <input type="text" id="departamento" name="departamento" className="form-control" />
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="telFijo" className="form-label">Tel fijo:</label>
                    <input type="text" id="telFijo" name="telFijo" className="form-control" />
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="telefono" className="form-label">Tel movil:</label>
                    <input type="text" id="telefono" name="telefono" className="form-control" />
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="correo" className="form-label">E-mail:</label>
                    <input type="text" id="correo" name="correo" className="form-control" />
                </div>
            </div>

            <div className="mb-3">
                <strong>¿Cómo se enteró de la capacitacion?</strong>
            </div>
            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="comoSeEntero" id="redes" value="redes" />
                        <label className="form-check-label" htmlFor="redes">
                            Redes sociales
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="comoSeEntero" id="correo" value="correo" />
                        <label className="form-check-label" htmlFor="correo">
                            Correo electrónico
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="comoSeEntero" id="recomendacion" value="recomendacion" />
                        <label className="form-check-label" htmlFor="recomendacion">
                            Recomendación
                        </label>
                    </div>
                </div>
            </div>
            <br></br>
            <button className="btn btn-success">Finalizar inscripción</button>
        </div>
    );
}
export { Inscripcion };