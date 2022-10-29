import { useContext, useState } from 'react';
import styled from 'styled-components';
import EventInfoContext from '../../contexts/EventInfoContext';
import PaymentContext from '../../contexts/PaymentContext';
import CardButton from './CardButton';

export default function ModalitySelection(props) {
  const { eventInfo } = useContext(EventInfoContext);
  const { paymentData, setPaymentData } = useContext(PaymentContext);
  const [buttonStatus, setButtonStatus] = useState([false, false]);
  const { setIsOnline, areOptionsSelected } = props;

  return (
    <SelectionContainer>
      {eventInfo.isPresential ? (
        <Span
          onClick={() => {
            if (buttonStatus[0] === buttonStatus[1]) {
              const newStatus = [true, false];
              let newPaymentData = paymentData;
              newPaymentData.isPresencial = true;
              newPaymentData.isOnline = false;
              newPaymentData.paymentValue = eventInfo.presentialPrice / 100;
              setButtonStatus(newStatus);
              setPaymentData(newPaymentData);
              setIsOnline(false);
            }
            if (buttonStatus[1] === true) {
              const newStatus = [true, false];
              let newPaymentData = paymentData;
              newPaymentData.isPresencial = true;
              newPaymentData.isOnline = false;
              newPaymentData.paymentValue = eventInfo.presentialPrice / 100;
              setButtonStatus(newStatus);
              setPaymentData(newPaymentData);
              setIsOnline(false);
            }
          }}
          buttonStatus={buttonStatus[0]}
        >
          <CardButton price={eventInfo.presentialPrice / 100}>Presencial</CardButton>
        </Span>
      ) : (
        ''
      )}
      {eventInfo.isOnline ? (
        <Span
          onClick={() => {
            if (buttonStatus[0] === buttonStatus[1]) {
              const newStatus = [false, true];
              let newPaymentData = paymentData;
              newPaymentData.isPresencial = false;
              newPaymentData.isOnline = true;
              newPaymentData.paymentValue = eventInfo.onlinePrice / 100;
              setButtonStatus(newStatus);
              setPaymentData(newPaymentData);
              setIsOnline(true);
              areOptionsSelected(true);
            }
            if (buttonStatus[0] === true) {
              const newStatus = [false, true];
              let newPaymentData = paymentData;
              newPaymentData.isPresencial = false;
              newPaymentData.isOnline = true;
              newPaymentData.paymentValue = eventInfo.onlinePrice / 100;
              setButtonStatus(newStatus);
              setPaymentData(newPaymentData);
              setIsOnline(true);
              areOptionsSelected(true);
            }
          }}
          buttonStatus={buttonStatus[1]}
        >
          <CardButton price={eventInfo.onlinePrice / 100}>Online</CardButton>
        </Span>
      ) : (
        ''
      )}
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
