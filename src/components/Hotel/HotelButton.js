import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useRooms from '../../hooks/api/useRooms';

export default function HotelButton({ index, name, imageUrl, accommodationsType, roomsVacancies, rooms, setRooms }) {
  const [type, setType] = useState('');
  const { rooms: roomsReceived } = useRooms(index);
  useEffect(() => {
    if (accommodationsType === 1) {
      setType('Single');
    } else if (accommodationsType === 2) {
      setType('Single e Double');
    } else {
      setType('Single, Double e Triple');
    }
  }, []);

  function openRooms() {
    if (rooms[0]?.hotelId === index) {
      setRooms('');
    } else {
      setRooms(roomsReceived);
    }
  }
  return (
    <Box onClick={() => openRooms()} rooms={rooms} index={index}>
      <img src={imageUrl} alt="Hotel" height={109} width={168} />
      <h3>{name}</h3>
      <h4>Tipos de acomodação:</h4>
      <p>{type}</p>
      <h4>Vagas disponíveis:</h4>
      <p>{roomsVacancies}</p>
    </Box>
  );
}

const Box = styled.div`
  width: 196px;
  min-height: 264px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 24px;
  padding: 16px 14px 16px 14px;
  margin-left: 0px;
  background-color: ${(props) => (props.rooms[0]?.hotelId !== props.index ? '#F1F1F1' : '#FFEED2')};
  cursor: pointer;

  img {
    border-radius: 5px;
  }

  h3 {
    margin-top: 10px;
    color: #343434;
    font-size: 20px;
    line-height: 20px;
  }
  h4 {
    margin-top: 10px;
    color: #3c3c3c;
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
  }

  p {
    margin-top: 2px;
    color: #3c3c3c;
    font-size: 12px;
  }
`;
