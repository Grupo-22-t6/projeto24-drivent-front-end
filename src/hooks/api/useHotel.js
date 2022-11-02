import useAsync from '../useAsync';

import * as hotelsApi from '../../services/hotelsApi';

export default function useHotel() {
  const { data: hotels, loading: hotelsLoading, error: hotelsError } = useAsync(hotelsApi.getHotels);

  return {
    hotels,
    hotelsLoading,
    hotelsError,
  };
}
