import { useContext, useState } from 'react';
import styled from 'styled-components';
import CardButton from './CardButton';
import { useNavigate } from 'react-router-dom';
import EventInfoContext from '../../contexts/EventInfoContext';
import PaymentContext from '../../contexts/PaymentContext';

export default function HotelSelection() {
  const { eventInfo } = useContext(EventInfoContext);
  const { paymentData, setPaymentData } = useContext(PaymentContext);
  const navigate = useNavigate();
  const [buttonStatus, setButtonStatus] = useState([false, false]);

  const toPaymentCard = () => {
    navigate('/dashboard/payment/card');
  };

  return (
    <>
      <h2 className="choseAccommodation">Ótimo! Agora escolha sua modalidade de hospedagem</h2>
      <SelectionContainer>
        <Span
          onClick={() => {
            setButtonStatus([!buttonStatus[0], false]);
            setPaymentData({ ...paymentData, withHotel: false, paymentValue: eventInfo.presentialPrice });
          }}
          buttonStatus={buttonStatus[0]}
        >
          <CardButton price="0">Sem Hotel</CardButton>
        </Span>
        <Span
          onClick={() => {
            setButtonStatus([false, !buttonStatus[1]]);
            setPaymentData({
              ...paymentData,
              withHotel: !buttonStatus[1],
              paymentValue: eventInfo.presentialPrice + eventInfo.hotelPrice,
            });
          }}
          buttonStatus={buttonStatus[1]}
        >
          <CardButton price={eventInfo.hotelPrice}>Com Hotel</CardButton>
        </Span>
      </SelectionContainer>
      {buttonStatus[0] ? (
        <>
          <h2>Fechado! O total ficou em R$ {eventInfo.presentialPrice}. Agora é só confirmar:</h2>
          <Reserve onClick={() => toPaymentCard()}>RESERVAR INGRESSO</Reserve>
        </>
      ) : buttonStatus[1] ? (
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
      ) : (
        ''
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

export const Reserve = styled.button`
  margin-top: 17px;
  cursor: pointer;
  background-color: #e0e0e0;
  height: 37px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  margin: 0px 0px 30px 0px;
  display: ${(props) => props.display};
  box-shadow: 0px 0px 10px 0.2px rgba(0, 0, 0, 0.3);
  :disabled {
    opacity: 65%;
  }
`;
