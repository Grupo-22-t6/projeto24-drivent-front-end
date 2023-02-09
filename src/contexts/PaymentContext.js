import { createContext } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

const PaymentContext = createContext();
export default PaymentContext;

export function PaymentProvider({ children }) {
  const [paymentData, setPaymentData] = useLocalStorage('paymentData', {
    eventId: undefined,
    isPresential: undefined,
    withHotel: undefined,
    paymentValue: undefined,
    paymentDone: false,
  });

  return <PaymentContext.Provider value={{ paymentData, setPaymentData }}>{children}</PaymentContext.Provider>;
}
