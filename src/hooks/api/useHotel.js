import useAsync from '../useAsync';

import * as hotelsApi from '../../services/hotelsApi';

export default function useHotel() {
  const { data: hotels, loading: hotelsLoading, error: hotelsError } = useAsync(hotelsApi.getHotels);
  const {
    data: roomsVacancies,
    loading: roomsVacanciesLoading,
    error: roomsVacanciesError,
  } = useAsync(hotelsApi.getRoomsVacancies);

  return {
    hotels,
    hotelsLoading,
    hotelsError,
    roomsVacancies,
    roomsVacanciesLoading,
    roomsVacanciesError,
  };
}
