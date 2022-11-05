import api from './api';

export async function getHotels(token) {
  const response = await api.get('/hotel', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
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
