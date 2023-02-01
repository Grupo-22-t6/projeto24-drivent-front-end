import { useContext, useEffect, useState } from 'react';

import styled from 'styled-components';
import PaymentContext from '../../../contexts/PaymentContext';
import CreditCard from '../../../components/Payment/CreditCard';
import ConfirmPayment from '../../../components/Payment/ConfirmPayment';
export default function PaymentCard() {
  const { paymentData, setPaymentData } = useContext(PaymentContext);

  return (
    <>
      <Container>
        <h1>Ingresso e pagamento</h1>
        <h2>Ingresso escolhido</h2>
        <Box>
          <h3>{}</h3>
          <h4></h4>
        </Box>
        <h2>Pagamento</h2>
        {true ? (
          <ConfirmPayment />
        ) : (
          <CardBox>
            <CreditCard setPaymentDone={true} />
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
const CardBox = styled.div`
  margin: 20px 24px;
`;
