import { useState, useContext } from 'react';
import styled from 'styled-components';
import CardButton from './CardButton';
import PaymentContext from '../../contexts/PaymentContext';

export default function HotelSelection(props) {
  const { areOptionsSelected } = props;
  const { paymentData, setPaymentData } = useContext(PaymentContext);
  const [buttonStatus, setButtonStatus] = useState([false, false]);
  const newPaymentValue = paymentData.paymentValue;

  return (
    <SelectionContainer>
      <Span
        buttonStatus={buttonStatus[0]}
        onClick={() => {
          if (buttonStatus[0] === buttonStatus[1]) {
            const newStatus = [true, false];
            setButtonStatus(newStatus);
            areOptionsSelected(true);
          }
          if (buttonStatus[1] === true) {
            const newStatus = [true, false];
            setButtonStatus(newStatus);
            areOptionsSelected(true);
          }
        }}
      >
        <CardButton price="0">Sem Hotel</CardButton>
      </Span>
      <Span
        buttonStatus={buttonStatus[1]}
        onClick={() => {
          if (buttonStatus[0] === buttonStatus[1]) {
            const newStatus = [false, true];
            setButtonStatus(newStatus);
            areOptionsSelected(true);
          }
          if (buttonStatus[0] === true) {
            const newStatus = [false, true];
            setButtonStatus(newStatus);
            areOptionsSelected(true);
          }
        }}
      >
        <CardButton price="350">Com Hotel</CardButton>
      </Span>
    </SelectionContainer>
  );
}

const SelectionContainer = styled.div`
  display: flex;
`;

const Span = styled.span`
  div {
    background-color: ${(props) => (props.buttonStatus ? '#FFEED2' : '#FFFFFF')};
  }
`;
