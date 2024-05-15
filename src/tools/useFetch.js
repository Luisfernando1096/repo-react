function useFetch() {
  const urlBase = "http://localhost:8010/cursos/v1/";
  
  const getFetch = (urlParcial) => {
    const url = urlBase.concat(urlParcial);

    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((datos) => {
          resolve(datos)
        })
        .catch((error) => {
          reject(error)
        })
    })

  }

  const postFetch = (urlParcial, datos) => {
    const url = urlBase.concat(urlParcial);

    return new Promise((resolve, reject) => {
      const payload = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      }

      fetch(url, payload)
        .then((response) => response.json())
        .then((data) => {
          console.log('datos->', data);
          resolve(data)
        })
        .catch((error) => {
          console.log('error->', error);
          reject(error)
        })
    })

  }

  const putFetch = (urlParcial, datos) => {
    const url = urlBase.concat(urlParcial);

    return new Promise((resolve, reject) => {
      const payload = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      }

      fetch(url, payload)
        .then((response) => response.json())
        .then((data) => {
          console.log('datos->', data);
          resolve(data)
        })
        .catch((error) => {
          console.log('error->', error);
          reject(error)
        })
    })

  }

  const deleteFetch = (urlParcial) => {
    const url = urlBase.concat(urlParcial);

    return new Promise((resolve, reject) => {
      const payload = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }

      fetch(url, payload)
        .then((response) => response.json())
        .then((data) => {
          console.log('datos->', data);
          resolve(data)
        })
        .catch((error) => {
          console.log('error->', error);
          reject(error)
        })
    })
  }

  return { getFetch, postFetch, putFetch, deleteFetch }

}

export { useFetch }