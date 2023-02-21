/* eslint-disable indent */
import { useState } from 'react';
import styled from 'styled-components';
import HotelButton from '../../../components/Hotel/HotelButton';
import RoomsBox from '../../../components/Hotel/RoomsBox';
import useHotel from '../../../hooks/api/useHotel';
import usePayment from '../../../hooks/api/usePayment';
import useReserve from '../../../hooks/api/useReserve';

export default function Hotel() {
  const { hotels } = useHotel();
  const { payment } = usePayment();
  const { reserve, getReserve } = useReserve();
  const [rooms, setRooms] = useState('');

  if (!payment) {
    return (
      <Container>
        <h1>Escolha de hotel e quarto</h1>
        <ContentCentered>
          <h2>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</h2>
        </ContentCentered>
      </Container>
    );
  }

  if (!payment?.withHotel && payment) {
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
      {reserve && hotels ? (
        <>
          <h2>Você ja escolheu o seu quarto</h2>
          <Hotels>
            <HotelButton
              index={reserve.hotelId}
              name={hotels[reserve.hotelId - 1].name}
              imageUrl={hotels[reserve.hotelId - 1].imageUrl}
              accommodationsType={reserve.accommodationType}
              rooms={[reserve]}
              setRooms={setRooms}
            >
              {reserve}
            </HotelButton>
          </Hotels>
        </>
      ) : (
        <>
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
        </>
      )}
      {rooms !== '' ? (
        <>
          <h2>Ótima pedida! Agora escolha seu quarto:</h2>
          <RoomsBox rooms={rooms} setRooms={setRooms} getReserve={getReserve} />
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
