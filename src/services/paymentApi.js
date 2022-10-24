import api from './api';

export async function pay(body, token) {
  const response = await api.post('/payment', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
