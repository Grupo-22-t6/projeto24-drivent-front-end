import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentApi from '../../services/paymentApi';

export default function useVerifyPaymentDone() {
  const token = useToken();

  const {
    data: paymentIsDone,
    loading: verifyPaymentLoading,
    error: verifyPaymentError,
    act: verifyPayment,
  } = useAsync(() => paymentApi.verifyPaymentDone(token));

  return {
    paymentIsDone,
    verifyPaymentLoading,
    verifyPaymentError,
    verifyPayment,
  };
}
