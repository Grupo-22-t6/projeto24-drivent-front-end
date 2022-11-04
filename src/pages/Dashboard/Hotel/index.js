import { useState } from 'react';
import styled from 'styled-components';
import HotelButton from '../../../components/Hotel/HotelButton';
import useHotel from '../../../hooks/api/useHotel';

export default function Hotel() {
  const { hotels, roomsVacancies } = useHotel();
  const [clickedButton, setClickedButton] = useState('');

  return (
    <Container>
      <h1>Escolha de hotel e quarto</h1>
      <h2>Primeiro, escolha seu hotel</h2>
      <Hotels>
        {roomsVacancies &&
          hotels?.map((hotel, index) => {
            return (
              <>
                <Span
                  onClick={() => {
                    setClickedButton(index);
                  }}
                >
                  <HotelButton
                    key={index}
                    buttonStatus={clickedButton === index}
                    index={index}
                    name={hotel.name}
                    imageUrl={hotel.imageUrl}
                    accommodationsType={hotel.accommodationsTypes}
                    roomsVacancies={roomsVacancies[index]}
                  />
                </Span>
              </>
            );
          })}
      </Hotels>
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
`;

const Span = styled.span``;
