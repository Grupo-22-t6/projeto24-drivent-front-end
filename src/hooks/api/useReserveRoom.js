import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useReserveRoom(roomId) {
  const token = useToken();

  const {
    loading: reserveRoomLoading,
    error: reserveRoomError,
    act: reserveRoom,
  } = useAsync(() => hotelApi.reserveRoom(roomId, token), false);

  return {
    reserveRoomLoading,
    reserveRoomError,
    reserveRoom,
  };
}
