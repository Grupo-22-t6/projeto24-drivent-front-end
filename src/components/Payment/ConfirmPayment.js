import styled from 'styled-components';
import { IoIosCheckmarkCircle } from 'react-icons/io';

export default function ConfirmPayment() {
  return (
    <>
      <Tittle>Pagamento</Tittle>
      <Container>
        <IconBox>
          <IoIosCheckmarkCircle />
        </IconBox>
        <TextBox>
          <h3>Pagamento confirmado!</h3>
          <p>Prossiga para escolha de hospedagem e atividades</p>
        </TextBox>
      </Container>
    </>
  );
}
const Tittle = styled.h2`
  font-size: 15px;
  margin-bottom: 15px;
`;
const Container = styled.section`
  display: flex;
  align-items: center;
  font-size: 35px;
`;
const IconBox = styled.div`
  color: #36b853;
  display: flex;
  align-items: center;
`;
const TextBox = styled.div`
  font-size: 14px;
  font-weight: 300;
  margin-left: 5px;

  h3 {
    font-weight: 500;
    margin-bottom: 2px;
  }
`;
