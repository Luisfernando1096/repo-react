import { useState } from 'react'
import { useFetch } from './useFetch';

const useApp = () => {
    const [cursos, setCursos] = useState([]);
    const { getFetch, postFetch, putFetch, deleteFetch } = useFetch();

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

    const postOnClick = () => {

        const urlParcial = 'cursos/';

        const datos = {
            curso: "CURSO PRUEBA",
            precio: 200,
            idTipoCurso: 1,
            fechaInicio: "2024-05-05",
            lugar: "USO",
            modalidad: "PRESENCIAL",
            fechaFinalizacion: "2024-10-05", 
            instructor: "Juan Perez",
        }
        
        postFetch(urlParcial, datos)
        .then((respuesta) => {
            console.log('Datos->', respuesta);
            const { datos } = respuesta;
            const { insertId } = datos;
            console.log("ID->", insertId);
        })
        .catch((error) => {
            console.log('Error->', error);
        })
    }
    const putOnClick = () => {

        const urlParcial = 'cursos/13';

        const datos = {
            curso: "ACTUALIZADO",
            precio: 120,
            idTipoCurso: 1,
            fechaInicio: "2024-05-05",
            lugar: "USO",
            modalidad: "VIRTUAL",
            fechaFinalizacion: "2024-10-05", 
            instructor: "Juan Perez",
        }
        
        putFetch(urlParcial, datos)
        .then((respuesta) => {
            console.log('Datos->', respuesta);
        })
        .catch((error) => {
            console.log('Error->', error);
        })
    }

    const deleteOnClick = () => {
        const urlParcial = 'cursos/13';
        
        deleteFetch(urlParcial)
        .then((respuesta) => {
            console.log('Datos->', respuesta);
        })
        .catch((error) => {
            console.log('Error->', error);
        })
    }

    return {
        getCursos,
        cursos,
        postOnClick,
        putOnClick,
        deleteOnClick
    }

}

export { useApp }