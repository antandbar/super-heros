import axios from 'axios';

// Se importa cliente de axios con url base
const client = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
});

// Se utiliza intercerptor para manejar respuesta y errores
client.interceptors.response.use(
  response => response.data,
  error => {
    if (!error.response) {
      return Promise.reject({ message: error.message });
    }
    return Promise.reject({
      message: error.response.statusText,
      ...error.response,
      ...error.response.data,
    });
  },
);

export default client;
