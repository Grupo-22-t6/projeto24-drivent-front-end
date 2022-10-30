import styled from 'styled-components';
import HotelButton from '../../../components/Hotel/HotelButton';

export default function Hotel() {
  return (
    <Container>
      <h1>Escolha de hotel e quarto</h1>
      <h2>Primeiro, escolha seu hotel</h2>
      <Hotels>
        <HotelButton />
        <HotelButton />
        <HotelButton />
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
