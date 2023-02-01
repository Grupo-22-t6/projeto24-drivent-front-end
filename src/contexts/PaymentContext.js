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
    cardNumber: undefined,
    cardName: undefined,
    expirationDate: undefined,
    securityCode: undefined,
  });

  return <PaymentContext.Provider value={{ paymentData, setPaymentData }}>{children}</PaymentContext.Provider>;
}
