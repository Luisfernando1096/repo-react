import React from 'react'

const Participantes = () => {
  return (
    <>
      <div class="mt-5 d-flex">
        <div class="p-2 flex-grow-1"><h1 className=''>Cursos</h1></div>
        
        <div class="p-2"><button className='btn btn-success'>Agregar curso</button></div>
      </div>
      <div class="table-responsive text-center">
        <table class="table table-striped">

          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre del curso</th>
              <th scope="col">Estado</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <button className='btn btn-primary'>Editar</button>
                <button className='btn btn-success'>Ver participantes</button></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td> Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export { Participantes }