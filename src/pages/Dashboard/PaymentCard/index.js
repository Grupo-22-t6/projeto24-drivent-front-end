import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PaymentContext from '../../../contexts/PaymentContext';
import CreditCard from '../../../components/Payment/CreditCard';
import ConfirmPayment from '../../../components/Payment/ConfirmPayment';
export default function PaymentCard() {
  const { paymentData, setPaymentData } = useContext(PaymentContext);
  const [isPresential, setIspresential] = useState('Online');
  const [haveHotel, setHaveHotel] = useState('Sem Hotel');
  const [paymentDone, setPaymentDone] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (paymentData.isPresential === true) setIspresential('Presencial');
    if (location.state.haveHotel === true) setHaveHotel('Com Hotel');
    setPaymentData({ ...paymentData, paymentValue: location.state.finalPrice });
  }, []);

  return (
    <>
      <Container>
        <h1>Ingresso e pagamento</h1>
        <h2>Ingresso escolhido</h2>
        <Box>
          <h3>{`${isPresential}  + ${haveHotel}`}</h3>
          <h4>R$ {location.state.finalPrice}</h4>
        </Box>
        <h2>Pagamento</h2>
        {paymentDone ? (
          <ConfirmPayment />
        ) : (
          <CardBox>
            <CreditCard setPaymentDone={setPaymentDone} />
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
