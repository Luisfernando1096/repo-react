import React, { useState } from 'react'
import { useFetch } from '../../tools/useFetch';

const useLista = () => {

  // Función para crear el objeto de datos y establecer valores si se le manda un departamento
  const crearDatos = (dep = null) => {
    return {
      idDepartamento: dep ? dep.idDepartamento : '',
      departamento: dep ? dep.departamento : '',
      codigo: dep ? dep.codigo : ''
    };
  };

  const [departamentos, setDepartamentos] = useState([]);
  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState(crearDatos());
  const [operacion, setOperacion] = useState(1);
  const [titulo, setTitulo] = useState('');
  const { getFetch, postFetch, putFetch, deleteFetch } = useFetch();

  const openModal = (op, departamentoSeleccionado = crearDatos()) => {
    setDepartamentoSeleccionado(departamentoSeleccionado);
    setOperacion(op);
    setTitulo(op === 1 ? 'Registrar Departamento' : 'Editar Departamento');
  };

  const getDepartamentos = () => {
    const urlParcial = "departamentos/"
    getFetch(urlParcial)
      .then((data) => {
        const { datos } = data;
        console.log("Datos: ", datos);
        setDepartamentos(datos);
      })
      .catch((error) => {
        console.log("Error->", error);
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartamentoSeleccionado(departamentoPrevio => ({ ...departamentoPrevio, [name]: value }));
  }

  const validarCampos = () => {
    if (departamentoSeleccionado.departamento.trim() === '') {
      alert('Departamento vacío!');
    } else {

      const datos = {
        departamento: departamentoSeleccionado.departamento,
        codigo: departamentoSeleccionado.codigo
      };

      if (operacion === 1) {
        // Insertar (capturar y enviar parámetros)
        postOnClick(datos);
      } else {
        // Actualizar
        const id = departamentoSeleccionado.idDepartamento;
        putOnClick(id, datos);
      }
      document.getElementById('btnCerrarModal').click();
    }
  };

  const postOnClick = (datos) => {
    const urlParcial = 'departamentos/';

    postFetch(urlParcial, datos)
      .then((respuesta) => {
        getDepartamentos();
      })
      .catch((error) => {
        console.log('Error->', error);
      })
  }

  const putOnClick = (id, datos) => {
    const urlParcial = `departamentos/${id}`;

    putFetch(urlParcial, datos)
      .then((respuesta) => {
        getDepartamentos();
      })
      .catch((error) => {
        console.log('Error->', error);
      })
  }

  const deleteOnClick = (id) => {
    const urlParcial = `departamentos/${id}`;

    deleteFetch(urlParcial)
      .then((respuesta) => {
        getDepartamentos();
      })
      .catch((error) => {
        console.log('Error->', error);
      })
  }

  return {
    getDepartamentos,
    departamentos,
    handleChange,
    crearDatos,
    titulo,
    openModal,
    departamentoSeleccionado,
    deleteOnClick,
    validarCampos
  }
}

export { useLista }
