import styled from 'styled-components';
import CardButton from '../../../components/Payment/CardButton';

export default function Payment() {
  return (
    <Container>
      <h1>Ingresso e pagamento</h1>
      <h2>Primeiro, escolha sua modalidade do ingresso</h2>
      <Content>
        <CardButton price="300">Presencial</CardButton>
        <CardButton price="150">Online</CardButton>
      </Content>
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
`;

const Content = styled.div`
display: flex;

`;
