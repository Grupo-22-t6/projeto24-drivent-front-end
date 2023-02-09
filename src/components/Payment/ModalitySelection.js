import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import EventInfoContext from '../../contexts/EventInfoContext';
import PaymentContext from '../../contexts/PaymentContext';
import CardButton from './CardButton';
import HotelSelection, { Reserve } from './HotelSelection';

export default function ModalitySelection() {
  const { eventInfo } = useContext(EventInfoContext);
  const { paymentData, setPaymentData } = useContext(PaymentContext);
  const [buttonStatus, setButtonStatus] = useState([false, false]);
  const navigate = useNavigate();
  const toPaymentCard = () => {
    navigate('/dashboard/payment/card');
  };
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
              setPaymentData({
                ...paymentData,
                isPresential: false,
                paymentValue: eventInfo.onlinePrice,
                withHotel: false,
              });
            }}
            buttonStatus={buttonStatus[1]}
          >
            <CardButton price={eventInfo.onlinePrice}>Online</CardButton>
          </Span>
        ) : null}
      </SelectionContainer>
      {paymentData.isPresential && <HotelSelection />}
      {buttonStatus[1] ? (
        <>
          <h2>Fechado! O total ficou em R$ {paymentData.paymentValue}. Agora é só confirmar:</h2>
          <Reserve
            onClick={() => {
              toPaymentCard();
            }}
          >
            RESERVAR INGRESSO
          </Reserve>
        </>
      ) : null}
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
