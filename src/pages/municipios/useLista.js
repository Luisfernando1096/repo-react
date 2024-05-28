import React, { useState, useEffect } from 'react';
import { useFetch } from '../../tools/useFetch';

const useLista = () => {

  const crearDatos = (mun = null) => {
    return {
      idMunicipio: mun ? mun.idMunicipio : '',
      municipio: mun ? mun.municipio : '',
      codigo: mun ? mun.codigo : '',
      idDepartamento: mun ? mun.idDepartamento : '',
      nombreDepartamento: mun ? mun.nombreDepartamento : ''
    };
  };

  const [municipios, setMunicipios] = useState([]);
  const [municipioSeleccionado, setMunicipioSeleccionado] = useState(crearDatos());
  const [departamentos, setDepartamentos] = useState([]);
  const [operacion, setOperacion] = useState(1);
  const [titulo, setTitulo] = useState('');
  const { getFetch, postFetch, putFetch, deleteFetch } = useFetch();

  useEffect(() => {
    getDepartamentos();
  }, []);

  useEffect(() => {
    if (departamentos.length > 0) {
      getMunicipios();
    }
  }, [departamentos]);

  const openModal = (op, municipioSeleccionado = crearDatos()) => {
    setMunicipioSeleccionado(municipioSeleccionado);
    setOperacion(op);
    setTitulo(op === 1 ? 'Registrar Municipio' : 'Editar Municipio');
  };

  const getMunicipios = () => {
    const urlParcial = "municipios/";
    getFetch(urlParcial)
      .then((data) => {
        const { datos } = data;
        const municipiosConNombreDepartamento = datos.map((municipio) => {
          const departamento = departamentos.find(d => d.idDepartamento === municipio.idDepartamento);
          return {
            ...municipio,
            nombreDepartamento: departamento ? departamento.departamento : ''
          };
        });
        setMunicipios(municipiosConNombreDepartamento);
      })
      .catch((error) => {
        console.log("Error->", error);
      });
  };

  const getDepartamentos = () => {
    const urlParcial = "departamentos/";
    getFetch(urlParcial)
      .then((data) => {
        const { datos } = data;
        setDepartamentos(datos);
      })
      .catch((error) => {
        console.log("Error->", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMunicipioSeleccionado(municipioPrevio => ({ ...municipioPrevio, [name]: value }));
  };

  const validarCampos = () => {
    if (municipioSeleccionado.municipio.trim() === '') {
      alert('Municipio vacío!');
    } else {
      const datos = {
        municipio: municipioSeleccionado.municipio,
        codigo: municipioSeleccionado.codigo,
        idDepartamento: municipioSeleccionado.idDepartamento
      };

      if (operacion === 1) {
        postOnClick(datos);
      } else {
        const id = municipioSeleccionado.idMunicipio;
        putOnClick(id, datos);
      }
      document.getElementById('btnCerrarModal').click();
    }
  };

  const postOnClick = (datos) => {
    const urlParcial = 'municipios/';
    postFetch(urlParcial, datos)
      .then((respuesta) => {
        getMunicipios();
      })
      .catch((error) => {
        console.log('Error->', error);
      });
  };

  const putOnClick = (id, datos) => {
    const urlParcial = `municipios/${id}`;
    putFetch(urlParcial, datos)
      .then((respuesta) => {
        getMunicipios();
      })
      .catch((error) => {
        console.log('Error->', error);
      });
  };

  const deleteOnClick = (id) => {
    const urlParcial = `municipios/${id}`;
    deleteFetch(urlParcial)
      .then((respuesta) => {
        getMunicipios();
      })
      .catch((error) => {
        console.log('Error->', error);
      });
  };

  return {
    getMunicipios,
    municipios,
    handleChange,
    crearDatos,
    titulo,
    openModal,
    municipioSeleccionado,
    deleteOnClick,
    validarCampos,
    departamentos
  }
};

export { useLista };
