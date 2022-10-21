import { useContext } from 'react';
import styled from 'styled-components';
import EventInfoContext from '../../contexts/EventInfoContext';

import CardButton from './CardButton';

export default function ModalitySelection() {
  const { eventInfo } = useContext(EventInfoContext);

  return (
    <SelectionContainer>
      {eventInfo.isPresential ? <CardButton price="300">Presencial</CardButton> : ''}
      {eventInfo.isOnline ? <CardButton price="150">Online</CardButton> : ''}
    </SelectionContainer>
  );
}

const SelectionContainer = styled.div`
  display: flex;
`;
