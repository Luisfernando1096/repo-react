import React, { useState } from 'react'
import { useFetch } from '../../tools/useFetch';

const useLista = () => {

  // Función para crear el objeto de datos y establecer valores si se le manda un horario
  const crearDatos = (horario = null) => {
    return {
      idHorario: horario ? horario.idHorario : '',
      dia: horario ? horario.dia : '',
      horaInicio: horario ? horario.horaInicio : '',
      horaFin: horario ? horario.horaFin : ''

    };
  };

  const [horarios, setHorarios] = useState([]);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(crearDatos());
  const [operacion, setOperacion] = useState(1);
  const [titulo, setTitulo] = useState('');
  const { getFetch, postFetch, putFetch, deleteFetch } = useFetch();

  const openModal = (op, horarioSeleccionado = crearDatos()) => {
    setHorarioSeleccionado(horarioSeleccionado);
    setOperacion(op);
    setTitulo(op === 1 ? 'Registrar Horario' : 'Editar Horario');
  };


  const getHorarios = () => {
    const urlParcial = "horarios/"
    getFetch(urlParcial)
      .then((data) => {
        console.log("Datos->", data);
        const { datos } = data
        setHorarios(datos)
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
    setHorarioSeleccionado(horarioPrevio => ({ ...horarioPrevio, [name]: value }));
  }

  const validarCampos = () => {
    if (horarioSeleccionado.dia.trim() === '') {
      alert('Dia Vacio!');
    } else {

      const datos = {
        dia: horarioSeleccionado.dia,
        horaInicio: horarioSeleccionado.horaInicio,
        horaFin: horarioSeleccionado.horaFin

      };


      if (operacion === 1) {
        // Insertar (capturar y enviar parámetros)
        postOnClick(datos);
      } else {
        // Actualizar
        const id = horarioSeleccionado.idHorario;
        putOnClick(id, datos);
      }
      document.getElementById('btnCerrarModal').click();
    }
  };

  const postOnClick = (datos) => {

    const urlParcial = 'horarios/';

    postFetch(urlParcial, datos)
      .then((respuesta) => {
        console.log('Datos->', respuesta);
        getHorarios();
      })
      .catch((error) => {
        console.log('Error->', error);
      })
  }
  const putOnClick = (id, datos) => {

    const urlParcial = `horarios/${id}`;

    putFetch(urlParcial, datos)
      .then((respuesta) => {
        console.log('Datos->', respuesta);
        getHorarios();
      })
      .catch((error) => {
        console.log('Error->', error);
      })
  }

  const deleteOnClick = (id) => {
    const urlParcial = `horarios/${id}`;

    deleteFetch(urlParcial)
      .then((respuesta) => {
        console.log('Datos->', respuesta);
        getHorarios();
      })
      .catch((error) => {
        console.log('Error->', error);
      })
  }

  return {
    getHorarios,
    horarios,
    handleChange,
    crearDatos,
    titulo,
    openModal,
    horarioSeleccionado,
    deleteOnClick,
    validarCampos
  }
}

export { useLista }