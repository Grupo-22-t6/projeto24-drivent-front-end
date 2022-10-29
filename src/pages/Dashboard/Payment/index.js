import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HotelSelection from '../../../components/Payment/HotelSelection';
import ModalitySelection from '../../../components/Payment/ModalitySelection';

export default function Payment() {
  const [isOnline, setIsOnline] = useState(false);
  const [areOptionsSelected, setIfOptionsAreSelected] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <h1>Ingresso e pagamento</h1>
        <h2>Primeiro, escolha sua modalidade do ingresso</h2>
        <ModalitySelection setIsOnline={setIsOnline} areOptionsSelected={setIfOptionsAreSelected} />
        {isOnline ? (
          <></>
        ) : (
          <>
            {' '}
            <h2 className="choseAccommodation">Ótimo! Agora escolha sua modalidade de hospedagem</h2>
            <HotelSelection areOptionsSelected={setIfOptionsAreSelected} />
          </>
        )}
      </Container>
      <Button
        onClick={() => {
          if (areOptionsSelected) {
            navigate('/dashboard/payment/card');
          } else {
            alert('Você precisa escolher a modalidade de ingresso antes de continuar!');
          }
        }}
      >
        RESERVAR INGRESSO
      </Button>
    </>
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

  .choseAccommodation {
    margin-top: 24px;
    color: #8e8e8e;
    font-size: 20px;
  }
`;

const Button = styled.button`
  width: 180px;
  height: 40px;
  margin-top: 35px;
  background: #e0e0e0;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  box-shadow: 2px 2px 2px 0px rgba(224, 224, 224, 0.75);
  -webkit-box-shadow: 2px 2px 2px 0px rgba(224, 224, 224, 0.75);
  -moz-box-shadow: 2px 2px 2px 0px rgba(224, 224, 224, 0.75);
`;
