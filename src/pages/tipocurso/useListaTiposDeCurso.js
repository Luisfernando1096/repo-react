import React, { useState } from 'react'
import { useFetch } from '../../tools/useFetch';

const useListaListaTiposDeCurso = () => {

  // Función para crear el objeto de datos y establecer valores si se le manda un horario
  const crearDatos = (tipocurso = null) => {
    return {
      idTipoCurso: tipocurso ? tipocurso.idTipoCurso : '',
      tipo: tipocurso ? tipocurso.tipo : '',
    };
  };

  const [tiposCurso, setTiposCurso] = useState([]);
  const [tiposCursoSeleccionado, setTiposCursoSeleccionado] = useState(crearDatos());
  const [operacion, setOperacion] = useState(1);
  const [titulo, setTitulo] = useState('');
  const { getFetch, postFetch, putFetch, deleteFetch } = useFetch();

  const openModal = (op, tiposCursoSeleccionado = crearDatos()) => {
    setTiposCursoSeleccionado(tiposCursoSeleccionado);
    setOperacion(op);
    setTitulo(op === 1 ? 'Registrar Tipo de curso' : 'Editar Tipo de curso');
  };


  const getTiposCurso = () => {
    const urlParcial = "tiposcurso/"
    getFetch(urlParcial)
      .then((data) => {
        console.log("Datos->", data);
        const { datos } = data
        setTiposCurso(datos)
      })
      .catch((error) => {
        console.log("Error_>", error);
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('Nombre: ', name, 'Valor: ', value);
    /*prevCurso representa el estado anterior y la función 
    flecha prevCurso => ({ ...prevCurso, [name]: value }) 
    crea un nuevo objeto de estado combinando el estado anterior con la nueva información 
    proporcionada por el usuario. */
    //usa el operador de propagación "..." para copiar todas las propiedades del objeto cursoPrevio al nuevo objeto.
    //[name]: value añade o actualiza la propiedad cuyo nombre es el valor de name con el valor value
    setTiposCursoSeleccionado(tipoCursoPrevio => ({ ...tipoCursoPrevio, [name]: value }));
  }

  const validarCampos = () => {
    if (tiposCursoSeleccionado.tipo.trim() === '') {
      alert('Tipo Vacio!');
    } else {

      const datos = {
        tipo: tiposCursoSeleccionado.tipo

      };


      if (operacion === 1) {
        // Insertar (capturar y enviar parámetros)
        postOnClick(datos);
      } else {
        // Actualizar
        const id = tiposCursoSeleccionado.idTipoCurso;
        putOnClick(id, datos);
      }
      document.getElementById('btnCerrarModal').click();
    }
  };

  const postOnClick = (datos) => {

    const urlParcial = 'tiposcurso/';

    postFetch(urlParcial, datos)
      .then((respuesta) => {
        console.log('Datos->', respuesta);
        getTiposCurso();
      })
      .catch((error) => {
        console.log('Error->', error);
      })
  }
  const putOnClick = (id, datos) => {

    const urlParcial = `tiposcurso/${id}`;

    putFetch(urlParcial, datos)
      .then((respuesta) => {
        console.log('Datos->', respuesta);
        getTiposCurso();
      })
      .catch((error) => {
        console.log('Error->', error);
      })
  }

  const deleteOnClick = (id) => {
    const urlParcial = `tiposcurso/${id}`;

    deleteFetch(urlParcial)
      .then((respuesta) => {
        console.log('Datos->', respuesta);
        getTiposCurso();
      })
      .catch((error) => {
        console.log('Error->', error);
      })
  }

  return {
    getTiposCurso,
    tiposCursoSeleccionado,
    tiposCurso,
    handleChange,
    crearDatos,
    titulo,
    openModal,
    deleteOnClick,
    validarCampos
  }
}

export { useListaListaTiposDeCurso }