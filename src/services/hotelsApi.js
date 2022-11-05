import api from './api';

export async function getHotels() {
  const response = await api.get('/hotel');
  return response.data;
}

export async function getRooms(token, hotelId) {
  const response = await api.get(`/hotel/rooms/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
