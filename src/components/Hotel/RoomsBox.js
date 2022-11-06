import styled from 'styled-components';
import { Reserve } from '../Payment/HotelSelection';

import Room from './Room';

export default function RoomsBox({ rooms }) {
  return (
    <>
      <Box>
        {rooms?.map((room, index) => (
          <Room
            key={index}
            number={room.number}
            accommodationType={room.accommodationType}
            reserves={room.reserves.length}
          />
        ))}
      </Box>
      <Reserve>RESERVAR QUARTO</Reserve>
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
