import { useState } from 'react';
import styled from 'styled-components';
import CardButton from './CardButton';
import { useNavigate } from 'react-router-dom';

export default function HotelSelection({ presentialPrice, onlinePrice }) {
  const navigate = useNavigate();
  const [buttonStatus, setButtonStatus] = useState([false, false]);
  const [haveHotel, setHaveHotel] = useState(false);
  const [finalPrice, setFinalPrice] = useState('');

  const toPaymentCard = () => {
    navigate('/dashboard/payment/card', { state: { finalPrice, haveHotel } });
  };

  return (
    <>
      <h2 className="choseAccommodation">Ótimo! Agora escolha sua modalidade de hospedagem</h2>
      <SelectionContainer>
        <Span
          onClick={() => {
            if (buttonStatus[0] === buttonStatus[1]) {
              const newStatus = [true, false];
              setButtonStatus(newStatus);
            }
            if (buttonStatus[1] === true) {
              const newStatus = [true, false];
              setButtonStatus(newStatus);
            }
            setHaveHotel(false);
            setFinalPrice(0 + onlinePrice);
          }}
          buttonStatus={buttonStatus[0]}
        >
          <CardButton price="0">Sem Hotel</CardButton>
        </Span>
        <Span
          onClick={() => {
            if (buttonStatus[0] === buttonStatus[1]) {
              const newStatus = [false, true];
              setButtonStatus(newStatus);
            }
            if (buttonStatus[0] === true) {
              const newStatus = [false, true];
              setButtonStatus(newStatus);
            }
            setFinalPrice(350 + presentialPrice);
            setHaveHotel(true);
          }}
          buttonStatus={buttonStatus[1]}
        >
          <CardButton price="350">Com Hotel</CardButton>
        </Span>
      </SelectionContainer>
      {buttonStatus[0] ? (
        <>
          <h2>Fechado! O total ficou em R$ {finalPrice}. Agora é só confirmar:</h2>
          <Reserve onClick={() => toPaymentCard()}>RESERVAR INGRESSO</Reserve>
        </>
      ) : buttonStatus[1] ? (
        <>
          <h2>Fechado! O total ficou em R$ {finalPrice}. Agora é só confirmar:</h2>
          <Reserve onClick={() => toPaymentCard()}>RESERVAR INGRESSO</Reserve>
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
  padding: 0px 10px;
  border: none;
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  box-shadow: 0px 0px 10px 0.2px rgba(0, 0, 0, 0.3);
`;
