import React from 'react';
import Cards from 'react-credit-cards';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from '../../../utils/cardFormatValidation';

import 'react-credit-cards/es/styles-compiled.css';
import { useState } from 'react';
import styled from 'styled-components';

export default function Card() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
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
        <div className="form-actions">
          <button className="btn btn-primary btn-block">PAY</button>
        </div>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  form {
    width: 300px;
    height: 225px;
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
