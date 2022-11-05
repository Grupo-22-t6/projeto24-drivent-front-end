import styled from 'styled-components';

import Room from './Room';

export default function RoomsBox({ rooms }) {
  return (
    <Box>
      {rooms?.map((room) => (
        <Room number={room.number} accommodationType={room.accommodationType} reserves={room.reserves.length} />
      ))}
    </Box>
  );
}

const Box = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;
`;
