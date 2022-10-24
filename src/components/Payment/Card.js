import React, { useContext } from 'react';
import Cards from 'react-credit-cards';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { toast } from 'react-toastify';
import { formatCreditCardNumber, formatCVC, formatExpirationDate } from '../../utils/cardFormatValidation';

import 'react-credit-cards/es/styles-compiled.css';
import { useState } from 'react';
import styled from 'styled-components';
import { Reserve } from './HotelSelection';
import PaymentContext from '../../contexts/PaymentContext';
import useSavePayment from '../../hooks/api/useSavePayment';

export default function Card() {
  const { paymentData } = useContext(PaymentContext);
  const { savePayment } = useSavePayment();
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null,
  });

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  const handleInputFocus = ({ target }) => {
    setCardData({ ...cardData, focused: target.name });
  };

  const handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value);
    }

    setCardData({ ...cardData, [target.name]: target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const payment = {
      ...paymentData,
      cardNumber: cardData.number,
      cardName: cardData.name,
      expirationDate: cardData.expiry,
      securityCode: cardData.cvc,
    };
    try {
      await savePayment(payment);
      toast('Compra finalizada!');
    } catch (e) {
      toast('Não foi possível comprar o ingresso!');
    }
  };

  return (
    <Container>
      <Cards
        number={cardData.number}
        name={cardData.name}
        expiry={cardData.expiry}
        cvc={cardData.cvc}
        focused={cardData.focused}
        callback={handleCallback}
      />
      <form onSubmit={handleSubmit}>
        <FormControl required={false} size="small">
          <InputLabel htmlFor="number">Card Number</InputLabel>
          <OutlinedInput
            type="tel"
            name="number"
            className="form-control"
            label="Card Number"
            pattern="[\d| ]{16,22}"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <FormHelperText>E.g.: 49..., 51..., 36..., 37...</FormHelperText>
        </FormControl>
        <FormControl required={false} size="small">
          <InputLabel htmlFor="name">Name</InputLabel>
          <OutlinedInput
            type="text"
            name="name"
            label="name"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </FormControl>
        <div>
          <FormControl required={false} size="small">
            <InputLabel htmlFor="expiry">Valid Thru</InputLabel>
            <OutlinedInput
              type="tel"
              name="expiry"
              label="Valid Thru"
              pattern="\d\d/\d\d"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              sx={{
                width: '180px',
                marginRight: '20px',
              }}
            />
          </FormControl>
          <FormControl required={false} size="small">
            <InputLabel htmlFor="cvc">CVC</InputLabel>
            <OutlinedInput
              type="tel"
              name="cvc"
              label="CVC"
              pattern="\d{3,4}"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              sx={{
                width: '100px',
              }}
            />
          </FormControl>
        </div>
        <input type="hidden" name="issuer" value={cardData.issuer} />
        <ButtonBox>
          <Reserve>FINALIZAR PAGAMENTO</Reserve>
        </ButtonBox>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  form {
    width: 300px;
    height: 184px;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > div {
      display: flex;
      width: 100%;
    }
  }
`;
const ButtonBox = styled.div`
  position: absolute;
  bottom: -100px;
  left: 0px;
`;
