import { useState } from 'react';
import styled from 'styled-components';
import HotelButton from '../../../components/Hotel/HotelButton';
import RoomsBox from '../../../components/Hotel/RoomsBox';
import useHotel from '../../../hooks/api/useHotel';

export default function Hotel() {
  const { hotels } = useHotel();
  const [open, setOpen] = useState('');

  return (
    <Container>
      <h1>Escolha de hotel e quarto</h1>
      <h2>Primeiro, escolha seu hotel</h2>
      <Hotels>
        {hotels?.map((hotel, index) => {
          return (
            <HotelButton
              index={index}
              name={hotel.name}
              imageUrl={hotel.imageUrl}
              accommodationsType={hotel.accommodationsTypes}
              roomsVacancies={hotel.roomsVacancies}
              open={open}
              setOpen={setOpen}
            />
          );
        })}
      </Hotels>
      {open !== '' ? (
        <>
          <h2>Ótima pedida! Agora escolha seu quarto:</h2>
          <RoomsBox hotelIndex={open} />
        </>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
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
  height: 80%;
  margin-bottom: 30px;
`;
