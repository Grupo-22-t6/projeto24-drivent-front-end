import { useState } from 'react';
import styled from 'styled-components';
import HotelButton from '../../../components/Hotel/HotelButton';
import RoomsBox from '../../../components/Hotel/RoomsBox';
import useHotel from '../../../hooks/api/useHotel';
import useVerifyPaymentDone from '../../../hooks/api/useVerifyPaymentDone';

export default function Hotel() {
  const { hotels } = useHotel();
  const { paymentIsDone } = useVerifyPaymentDone();
  const [rooms, setRooms] = useState('');

  if (!paymentIsDone) {
    return (
      <Container>
        <h1>Escolha de hotel e quarto</h1>
        <ContentCentered>
          <h2>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</h2>
        </ContentCentered>
      </Container>
    );
  }

  if (!paymentIsDone?.withHotel && paymentIsDone) {
    return (
      <Container>
        <h1>Escolha de hotel e quarto</h1>
        <ContentCentered>
          <h2>Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades</h2>
        </ContentCentered>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Escolha de hotel e quarto</h1>
      <h2>Primeiro, escolha seu hotel</h2>
      <Hotels>
        {hotels?.map((hotel, index) => {
          return (
            <HotelButton
              index={hotel.id}
              name={hotel.name}
              imageUrl={hotel.imageUrl}
              accommodationsType={hotel.accommodationsTypes}
              roomsVacancies={hotel.roomsVacancies}
              rooms={rooms}
              setRooms={setRooms}
            />
          );
        })}
      </Hotels>

      {rooms !== '' ? (
        <>
          <h2>Ótima pedida! Agora escolha seu quarto:</h2>
          <RoomsBox rooms={rooms} setRooms={setRooms} />
        </>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 90%;
  h1 {
    font-size: 34px;
    margin-bottom: 28px;
  }
  h2 {
    color: #8e8e8e;
    font-size: 20px;
  }
`;

const Hotels = styled.div`
  display: flex;
  width: 100%;

  margin-bottom: 30px;
`;

const ContentCentered = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0px 20%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
