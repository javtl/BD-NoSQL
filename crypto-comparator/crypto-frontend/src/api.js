
// src/api.js
import { mockCryptoPrices } from './mockData';

export const getCryptoPrices = async () => {
  // Usamos el mock en lugar de hacer una llamada HTTP
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCryptoPrices);
    }, 1000); // Simulamos un pequeño retraso de 1 segundo
  });
};






















/*
// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',  // Asegúrate de que el backend esté corriendo
});

export const getCryptoPrices = async () => {
  try {
    const response = await api.get('/prices'); // Aquí va la ruta de tu API que devuelve los precios
    return response.data;
  } catch (error) {
    console.error('Error al obtener los precios:', error);
    return {};  // Devuelve un objeto vacío en caso de error
  }
};
*/
