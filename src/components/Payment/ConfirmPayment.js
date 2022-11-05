import styled from 'styled-components';
import { IoIosCheckmarkCircle } from 'react-icons/io';

export default function ConfirmPayment() {
  return (
    <>
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
  font-size: 16px;
  font-weight: 400;
  margin-left: 5px;

  h3 {
    font-weight: 700;
    margin-bottom: 2px;
  }
`;
