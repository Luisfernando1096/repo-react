import { useState } from "react";
import { useFetch } from "../../tools/useFetch";

const useMostrarCursos = () => {
  const [cursos, setCursos] = useState([]);
  const { getFetch } = useFetch();

  const getCursos = () => {
    const urlParcial = "cursos/";
    getFetch(urlParcial)
      .then((data) => {
        console.log("Datos->", data);
        const { datos } = data;
        
        // Agrupar horarios por curso
        const groupedCourses = datos.reduce((acc, curr) => {
          const { idCurso, curso, fechaInicio, fechaFinalizacion, precio, dias, horaInicio, horaFin } = curr;
          const existingCourse = acc.find(course => course.idCurso === idCurso);

          if (existingCourse) {
            existingCourse.horarios.push({ dias, horaInicio, horaFin });
          } else {
            acc.push({
              idCurso,
              curso,
              fechaInicio,
              fechaFinalizacion,
              precio,
              horarios: [{ dias, horaInicio, horaFin }]
            });
          }

          return acc;
        }, []);

        setCursos(groupedCourses);
      })
      .catch((error) => {
        console.log("Error_>", error);
      });
  }

  return {
    cursos,
    getCursos
  }
}

export { useMostrarCursos };
