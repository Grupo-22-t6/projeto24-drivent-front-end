import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Reserve } from '../Payment/HotelSelection';

import Room from './Room';

export default function RoomsBox({ rooms }) {
  const [roomSelected, setRoomSelected] = useState('');
  useEffect(() => {
    setRoomSelected('');
  }, [rooms]);
  return (
    <>
      <Box>
        {rooms?.map((room, index) => (
          <Room
            id={room.id}
            number={room.number}
            accommodationType={room.accommodationType}
            reserves={room.reserves.length}
            setRoomSelected={setRoomSelected}
            roomSelected={roomSelected}
          />
        ))}
      </Box>
      <Reserve display={roomSelected ? 'initial' : 'none'}>RESERVAR QUARTO</Reserve>
    </>
  );
}

const Box = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 30px 0px;
`;
