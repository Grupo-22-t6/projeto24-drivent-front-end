import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentApi from '../../services/paymentApi';

export default function useSavePayment() {
  const token = useToken();

  const {
    loading: usePaymentLoading,
    error: savePaymentError,
    act: savePayment,
  } = useAsync((data) => paymentApi.pay(data, token), false);

  return {
    usePaymentLoading,
    savePaymentError,
    savePayment,
  };
}
