import styled from 'styled-components';
import ModalitySelection from '../../../components/Payment/ModalitySelection';

export default function Payment() {
  return (
    <Container>
      <h1>Ingresso e pagamento</h1>
      <h2>Primeiro, escolha sua modalidade do ingresso</h2>
      <ModalitySelection/>
    </Container>
  );
}

const Container = styled.div`
  h1{
    font-size: 34px;
    margin-bottom: 28px;
  }
  h2{
    color: #8E8E8E;
    font-size: 20px;
  }

  .choseAccommodation {
    margin-top: 24px;
    color: #8E8E8E;
    font-size: 20px;
  }
`;

