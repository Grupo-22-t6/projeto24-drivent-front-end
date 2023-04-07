import styled from 'styled-components';
import usePayment from '../../../hooks/api/usePayment';

export default function Activities() {
  const { payment } = usePayment();
  if (!payment) {
    return (
      <Container>
        <h1>Escolha de Atividades</h1>
        <ContentCentered>
          <h2>Você precisa ter confirmado pagamento antes de fazer a escolha de atividades</h2>
        </ContentCentered>
      </Container>
    );
  }
  return 'Em breve';
}

const Container = styled.div`
  width: 100%;
  height: 90%;
  h1 {
    font-size: 34px;
    margin-bottom: 28px;
  }
  h2 {
    color: #8e8e8e;
    font-size: 20px;
    margin-bottom: 20px;
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
