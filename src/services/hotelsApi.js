import api from './api';

export async function getHotels() {
  const response = await api.get('/hotel');
  return response.data;
}

export async function getRoomsVacancies() {
  const response = await api.get('/hotel/rooms');
  return response.data;
}
