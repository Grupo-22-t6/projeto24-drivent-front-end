import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useReserve() {
  const token = useToken();

  const {
    data: reserve,
    loading: reserveLoading,
    error: reserveError,
    act: getReserve,
  } = useAsync(() => hotelApi.getReserveOfUser(token));

  return {
    reserve,
    reserveLoading,
    reserveError,
    getReserve,
  };
}
