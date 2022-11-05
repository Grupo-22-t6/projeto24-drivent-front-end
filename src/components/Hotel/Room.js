import styled from 'styled-components';
import { BsPerson, BsPersonFill } from 'react-icons/bs';

import { useState } from 'react';
import { useEffect } from 'react';

export default function Room({ number, accommodationType, reserves }) {
  const [vacancies, setVacancies] = useState([]);
  useEffect(() => {
    defineVacancies();
  }, [accommodationType, reserves]);
  function defineVacancies() {
    const vacanciesArray = [];
    const reserveIndexs = accommodationType - reserves + 1;
    for (let i = 1; i <= accommodationType; i++) {
      if (i >= reserveIndexs) {
        vacanciesArray.push(<BsPersonFill size="1.17em" />);
        continue;
      }
      vacanciesArray.push(<BsPerson size="1.17em" />);
    }
    setVacancies(vacanciesArray);
  }

  return (
    <Container
      availability={accommodationType - reserves === 0 ? '#CECECE' : '#FFFFFF'}
      opacity={accommodationType - reserves === 0 ? '60%' : '100%'}
    >
      <h3>{number}</h3>
      <div>{vacancies?.map((vacancie) => vacancie)}</div>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props) => props.availability};
  opacity: ${(props) => props.opacity};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 175px;
  height: 40px;
  margin-bottom: 10px;
  border: 1px solid #cecece;
  border-radius: 10px;
  font-weight: 700;
  font-size: 19px;
  padding: 11px 14px;
  cursor: pointer;
  :hover {
    background-color: ${(props) => (props.availability === '#FFFFFF' ? '#F1F1F1' : '#CECECE')};
  }
`;
