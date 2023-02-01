import { useEffect } from 'react';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import EventInfoContext from '../../contexts/EventInfoContext';
import PaymentContext from '../../contexts/PaymentContext';
import CardButton from './CardButton';
import HotelSelection from './HotelSelection';

export default function ModalitySelection() {
  const { eventInfo } = useContext(EventInfoContext);
  const { paymentData, setPaymentData } = useContext(PaymentContext);
  const [buttonStatus, setButtonStatus] = useState([false, false]);

  useEffect(() => {
    setPaymentData({ ...paymentData, eventId: eventInfo.id });
  }, []);
  return (
    <>
      <SelectionContainer>
        {eventInfo.isPresential ? (
          <Span
            onClick={() => {
              setButtonStatus([!buttonStatus[0], false]);
              setPaymentData({ ...paymentData, isPresential: !buttonStatus[0] });
            }}
            buttonStatus={buttonStatus[0]}
          >
            <CardButton price={eventInfo.presentialPrice}>Presencial</CardButton>
          </Span>
        ) : null}
        {eventInfo.isOnline ? (
          <Span
            onClick={() => {
              setButtonStatus([false, !buttonStatus[1]]);
              setPaymentData({ ...paymentData, isPresential: false });
            }}
            buttonStatus={buttonStatus[1]}
          >
            <CardButton price={eventInfo.onlinePrice}>Online</CardButton>
          </Span>
        ) : null}
      </SelectionContainer>
      {paymentData.isPresential && (
        <HotelSelection presentialPrice={eventInfo.presentialPrice} onlinePrice={eventInfo.onlinePrice} />
      )}
    </>
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
