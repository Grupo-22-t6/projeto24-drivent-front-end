import { useContext } from 'react';
import styled from 'styled-components';
import PaymentContext from '../../../contexts/PaymentContext';
import CreditCard from '../../../components/Payment/CreditCard';
import ConfirmPayment from '../../../components/Payment/ConfirmPayment';
import { useEffect } from 'react';
import useVerifyPaymentDone from '../../../hooks/api/useVerifyPaymentDone';

export default function PaymentCard() {
  const { paymentData, setPaymentData } = useContext(PaymentContext);
  const { paymentIsDone } = useVerifyPaymentDone();
  useEffect(() => {
    if (paymentIsDone) {
      setPaymentData({ ...paymentData, ...paymentIsDone });
    } else {
      setPaymentData({ ...paymentData, paymentDone: false });
    }
  }, [paymentIsDone]);
  function showChoices() {
    let text = '';
    paymentData.isPresential ? (text += 'Presencial ') : (text += 'Online');
    if (paymentData.withHotel) text += '+ Hotel';
    return text;
  }
  return (
    <>
      <Container>
        <h1>Ingresso e pagamento</h1>
        <h2>Ingresso escolhido</h2>
        <Box>
          <h3>{showChoices()}</h3>
          <h4>R$ {paymentData.paymentValue}</h4>
        </Box>
        <h2>Pagamento</h2>
        {paymentIsDone || paymentData.paymentDone ? (
          <ConfirmPayment />
        ) : (
          <CardBox>
            <CreditCard />
          </CardBox>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 34px;
    margin-bottom: 28px;
  }

  h2 {
    color: #8e8e8e;
    font-size: 20px;
    margin-bottom: 28px;
    margin-top: 10px;
  }
`;

const Box = styled.div`
  width: 290px;
  height: 108px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-left: 0px;
  background-color: #ffeed2;

  h3 {
    color: #454545;
    font-size: 16px;
    line-height: 19px;
  }
  h4 {
    color: #898989;
    font-size: 14px;
    line-height: 16px;
  }
`;
const CardBox = styled.div`
  margin: 20px 24px;
`;
