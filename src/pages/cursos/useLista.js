import { useState } from 'react';
import { useFetch } from '../../tools/useFetch';
import { useNavigate } from 'react-router-dom';

const useLista = () => {

    const navegar = useNavigate();

    // Función para crear el objeto de datos y establecer valores si se le manda un curso
    const crearDatos = (curso = null) => {
        return {
            idCurso: curso ? curso.idCurso : '',
            curso: curso ? curso.curso : '',
            idTipoCurso: curso ? curso.idTipoCurso : '',
            fechaInicio: curso ? formatFecha(curso.fechaInicio) : '',
            precio: curso ? curso.precio : '',
            fechaFinalizacion: curso ? formatFecha(curso.fechaFinalizacion) : '',
            lugar: curso ? curso.lugar : '',
            modalidad: curso ? curso.modalidad : '',
            instructor: curso ? curso.instructor : ''
        };
    };

    const [operacion, setOperacion] = useState(1);
    const [titulo, setTitulo] = useState('');
    const [cursos, setCursos] = useState([]);
    const [tiposCurso, setTiposCurso] = useState([]);
    const [cursoSeleccionado, setCursoSeleccionado] = useState(crearDatos());
    const { getFetch, postFetch, putFetch, deleteFetch } = useFetch();

    // Función para formatear la fecha
    const formatFecha = (fecha) => {
        return fecha.split('T')[0];
    };

    const openModal = (op, cursoSeleccionado = crearDatos()) => {
        setCursoSeleccionado(cursoSeleccionado);
        setOperacion(op);
        setTitulo(op === 1 ? 'Registrar Curso' : 'Editar Curso');
        navegar("/cursosgestion", { state: { curso: cursoSeleccionado, operacion: op } });
    };

    const validarCampos = () => {
        console.log('Entre aqui');
        if (cursoSeleccionado.curso.trim() === '') {
            alert('Nombre Vacio!');
        } else if (cursoSeleccionado.idTipoCurso <= 0) {
            alert('Debe seleccionar un tipo de curso!');
        } else {

            const datos = {
                curso: cursoSeleccionado.curso,
                precio: cursoSeleccionado.precio,
                idTipoCurso: cursoSeleccionado.idTipoCurso,
                fechaInicio: cursoSeleccionado.fechaInicio,
                lugar: cursoSeleccionado.lugar,
                modalidad: cursoSeleccionado.modalidad,
                fechaFinalizacion: cursoSeleccionado.fechaFinalizacion,
                instructor: cursoSeleccionado.instructor
            };


            if (operacion === 1) {
                // Insertar (capturar y enviar parámetros)
                postOnClick(datos);
            } else {
                // Actualizar
                const id = cursoSeleccionado.idCurso;
                putOnClick(id, datos);
            }
            iracursos();
        }
    };

    const iracursos = () => {
        navegar("/cursos");
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
        setCursoSeleccionado(cursoPrevio => ({ ...cursoPrevio, [name]: value }));
    };

    const getCursos = () => {
        const urlParcial = "cursos/"
        getFetch(urlParcial)
            .then((data) => {
                console.log("Datos->", data);
                const { datos } = data
                setCursos(datos)
            })
            .catch((error) => {
                console.log("Error_>", error);
            })
    }

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

    const postOnClick = (datos) => {

        const urlParcial = 'cursos/';

        postFetch(urlParcial, datos)
            .then((respuesta) => {
                console.log('Datos->', respuesta);
                getCursos();
            })
            .catch((error) => {
                console.log('Error->', error);
            })
    }
    const putOnClick = (id, datos) => {

        const urlParcial = `cursos/${id}`;

        putFetch(urlParcial, datos)
            .then((respuesta) => {
                console.log('Datos->', respuesta);
                getCursos();
            })
            .catch((error) => {
                console.log('Error->', error);
            })
    }

    const deleteOnClick = (id) => {
        const urlParcial = `cursos/${id}`;

        deleteFetch(urlParcial)
            .then((respuesta) => {
                console.log('Datos->', respuesta);
                getCursos();
            })
            .catch((error) => {
                console.log('Error->', error);
            })
    }

    return {
        getCursos,
        cursos,
        cursoSeleccionado,
        setCursoSeleccionado,
        openModal,
        handleChange, titulo,
        validarCampos,
        getTiposCurso,
        tiposCurso,
        deleteOnClick,
        crearDatos,
        setOperacion,
        getTiposCurso,
        iracursos
    }

}

export { useLista }