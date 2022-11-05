import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useRooms(hotelId) {
  const token = useToken();

  const {
    loading: getRoomsLoading,
    error: getRoomsError,
    act: getRooms,
  } = useAsync((data) => hotelApi.getRooms(token, hotelId), false);

  return {
    getRoomsLoading,
    getRoomsError,
    getRooms,
  };
}
