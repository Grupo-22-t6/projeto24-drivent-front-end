import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PaymentContext from '../../../contexts/PaymentContext';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default function PaymentCard() {
  const { paymentData } = useContext(PaymentContext);
  const [isPresential, setIspresential] = useState('Online');
  const [haveHotel, setHaveHotel] = useState('Sem Hotel');
  const [cardData, setCardData] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });
  const location = useLocation();

  useEffect(() => {
    if (paymentData.isPresencial === true) setIspresential('Presencial');
    if (location.state.haveHotel === true) setHaveHotel('Com Hotel');
  }, []);

  const handleInputFocus = (e) => {
    setCardData({ ...cardData, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCardData({ ...cardData, [name]: value });
  };

  function submit(e) {
    e.preventDefault();
  }

  return (
    <>
      <Container>
        <h1>Ingresso e pagamento</h1>
        <h2>Ingresso escolhido</h2>
        <Box>
          <h3>{`${isPresential}  + ${haveHotel}`}</h3>
          <h4>R$ {location.state.finalPrice}</h4>
        </Box>
        <div id="PaymentForm">
          <Cards
            cvc={cardData.cvc}
            expiry={cardData.expiry}
            focused={cardData.focus}
            name={cardData.name}
            number={cardData.number}
          />
          <form onSubmit={submit}>
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={(e) => handleInputChange(e)}
              onFocus={(e) => handleInputFocus(e)}
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => handleInputChange(e)}
              onFocus={(e) => handleInputFocus(e)}
              required
            />
            <input
              type="text"
              name="expiry"
              placeholder="Valid Thru"
              pattern="\d\d/\d\d"
              onChange={(e) => handleInputChange(e)}
              onFocus={(e) => handleInputFocus(e)}
              required
            />
            <input
              type="tel"
              name="cvc"
              pattern="\d{3,4}"
              placeholder="CVC"
              onChange={(e) => handleInputChange(e)}
              onFocus={(e) => handleInputFocus(e)}
              required
            />
          </form>
        </div>
      </Container>
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
`;

const Box = styled.div`
  width: 290px;
  height: 108px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 24px;
  margin-left: 0px;
  background-color: #ffeed2;
  h3 {
    color: #454545;
    font-size: 16px;
    line-height: 19px;
  }
  h4 {
    color: #898989;
    font-size: 14px;
    line-height: 16px;
  }
`;
