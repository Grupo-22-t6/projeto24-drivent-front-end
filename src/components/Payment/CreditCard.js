import { useState, useContext } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';
import PaymentContext from '../../contexts/PaymentContext';
export default function CreditCard(props) {
  const { setPaymentConfirm } = props;
  const { paymentData, setPaymentData } = useContext(PaymentContext);

  const { isOnline, isPresencial, paymentValue } = paymentData;

  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');

  return (
    <>
      <Container>
        <CardBox>
          <Cards cvc={cvc} expiry={expiry} focused={focus} name={name} number={number} />
        </CardBox>
        <Form id="card" onSubmit={(e) => addInfo(e)}>
          <NumberBox>
            <Input
              type="text"
              name="number"
              minLength={16}
              maxLength={19}
              value={number}
              placeholder="Card Number"
              required
              onChange={(e) => setNumber(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
            <p>E.g.: 49...,51...,36...,37...</p>
          </NumberBox>
          <Input
            name="name"
            type="text"
            maxLength={30}
            value={name}
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <BottomBox>
            <ExpiryBox>
              <Input
                name="expiry"
                type="text"
                minLength={4}
                maxLength={5}
                value={expiry}
                placeholder="Valid Thru"
                required
                onChange={(e) => setExpiry(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </ExpiryBox>
            <CvcBox>
              <Input
                name="cvc"
                type="text"
                minLength={3}
                maxLength={3}
                value={cvc}
                placeholder="CVC"
                required
                onChange={(e) => setCvc(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </CvcBox>
          </BottomBox>
        </Form>
      </Container>
      <Button form="card" type="submit">
        FINALIZAR PAGAMENTO
      </Button>
    </>
  );

  function addInfo(e) {
    e.preventDefault();

    const newPaymentData = {
      isOnline: isOnline,
      isPresencial: isPresencial,
      paymentValue: paymentValue,
      cardNumber: number,
      cardName: name,
      expirationDate: expiry,
      securityCode: cvc,
    };

    setPaymentData(newPaymentData);
    setPaymentConfirm(true);
  }
}

const Container = styled.section`
  display: flex;
`;
const Form = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 25px;
`;
const NumberBox = styled.div`
  width: 100%;
  margin-bottom: 18px;

  p {
    color: #e0e0e0;
    font-size: 14px;
    font-weight: 500;
    padding-top: 5px;
  }
`;
const BottomBox = styled.div`
  display: flex;
  margin: 18px 0px 18px 0px;
`;
const ExpiryBox = styled.div`
  width: 65%;
`;
const CvcBox = styled.div`
  margin-left: 5%;
  width: 30%;
`;
const CardBox = styled.div``;
const Input = styled.input`
  width: 100%;
  height: 42px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 15px;
  padding-left: 10px;
`;
const Button = styled.button`
  width: 180px;
  height: 40px;
  margin-top: 35px;
  background: #e0e0e0;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  box-shadow: 2px 2px 2px 0px rgba(224, 224, 224, 0.75);
  -webkit-box-shadow: 2px 2px 2px 0px rgba(224, 224, 224, 0.75);
  -moz-box-shadow: 2px 2px 2px 0px rgba(224, 224, 224, 0.75);
`;
