import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import useReserveRoom from '../../hooks/api/useReserveRoom';
import { Reserve } from '../Payment/HotelSelection';

import Room from './Room';

export default function RoomsBox({ rooms }) {
  const [roomSelected, setRoomSelected] = useState('');
  const { reserveRoom } = useReserveRoom();
  useEffect(() => {
    setRoomSelected('');
  }, [rooms]);

  async function saveReserve() {
    try {
      await reserveRoom(roomSelected);
      toast('Quarto Reservado!');
    } catch (e) {
      toast('Não foi possível comprar o ingresso!');
    }
  }

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
      <Reserve onClick={() => saveReserve()} display={roomSelected ? 'initial' : 'none'}>
        RESERVAR QUARTO
      </Reserve>
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
