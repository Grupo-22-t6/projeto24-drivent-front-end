import { useState } from 'react';
import styled from 'styled-components';
import CreditCard from '../../../components/Payment/CreditCard';
import ConfirmPayment from '../../../components/Payment/ConfirmPayment';
export default function PaymentCard() {
  const [isPaymentConfirmed, setPaymentConfirm] = useState(false);

  return (
    <>
      <Container>
        <h1>Ingresso e pagamento</h1>
        <h2>Ingresso escolhido</h2>
        <Box>
          <h3>Presencial + Com Hotel</h3>
          <h4>R$ 600</h4>
        </Box>
        {isPaymentConfirmed ? (
          <ConfirmPayment />
        ) : (
          <CreditCard setPaymentConfirm={setPaymentConfirm} />
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  h1 {
    font-size: 34px;
    margin-bottom: 28px;
  }

  h2 {
    color: #8e8e8e;
    font-size: 20px;
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
  margin: 20px 24px;
  margin-left: 0px;
  background-color: #ffeed2;
  cursor: pointer;
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
