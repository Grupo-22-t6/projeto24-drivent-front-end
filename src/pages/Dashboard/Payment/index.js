import styled from 'styled-components';
import ModalitySelection from '../../../components/Payment/ModalitySelection';
import useEnrollment from '../../../hooks/api/useEnrollment';

export default function Payment() {
  const { enrollment } = useEnrollment();
  
  if (!enrollment) {
    return (
      <Container>
        <h1>Ingresso e pagamento</h1>
        <ContentCentered>
          <h2>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</h2>
        </ContentCentered>
      </Container>
    );
  }
  return (
    <Container>
      <h1>Ingresso e pagamento</h1>
      <h2>Primeiro, escolha sua modalidade do ingresso</h2>
      <ModalitySelection/>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80%;
  h1 {
    font-size: 34px;
    margin-bottom: 28px;
  }
  h2 {
    color: #8e8e8e;
    font-size: 20px;
  }

  .choseAccommodation {
    margin-top: 24px;
    color: #8e8e8e;
    font-size: 20px;
  }
`;

const ContentCentered = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0px 20%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
