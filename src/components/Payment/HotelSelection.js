import styled from 'styled-components';
import CardButton from './CardButton';

export default function HotelSelection() {
  return (
    <>
      <h2 className="choseAccommodation">Ótimo! Agora escolha sua modalidade de hospedagem</h2>
      <SelectionContainer>
        <CardButton price="0">Sem Hotel</CardButton>
        <CardButton price="350">Com Hotel</CardButton>
      </SelectionContainer>
    </>
  );
}

const SelectionContainer = styled.div`
  display: flex;
`;
