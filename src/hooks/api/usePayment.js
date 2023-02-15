import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentApi from '../../services/paymentApi';

export default function usePayment() {
  const token = useToken();

  const {
    data: payment,
    loading: paymentLoading,
    error: paymentError,
    act: getPayment,
  } = useAsync(() => paymentApi.getPaymentOfUser(token));

  return {
    payment,
    paymentLoading,
    paymentError,
    getPayment,
  };
}
