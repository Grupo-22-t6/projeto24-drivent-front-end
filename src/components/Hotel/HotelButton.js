import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function HotelButton({ buttonStatus, name, imageUrl, accommodationsType, roomsVacancies }) {
  const [type, setType] = useState('');

  useEffect(() => {
    if (accommodationsType === 1) {
      setType('Single');
    } else if (accommodationsType === 2) {
      setType('Single e Double');
    } else {
      setType('Single, Double e Triple');
    }
  }, []);

  return (
    <Box buttonStatus={buttonStatus}>
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
  height: 264px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 24px;
  padding: 16px 14px 0 14px;
  margin-left: 0px;
  background-color: #f1f1f1;
  cursor: pointer;

  background-color: ${(props) => (props.buttonStatus ? '#FFEED2' : '#FFFFFF')};

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
