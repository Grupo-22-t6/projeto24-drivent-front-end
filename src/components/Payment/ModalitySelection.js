import { useContext } from 'react';
import styled from 'styled-components';
import EventInfoContext from '../../contexts/EventInfoContext';

import CardButton from './CardButton';

export default function ModalitySelection() {
  const { eventInfo } = useContext(EventInfoContext);

  return (
    <SelectionContainer>
      {eventInfo.isPresential ? <CardButton price={eventInfo.presentialPrice/100}>Presencial</CardButton> : ''}
      {eventInfo.isOnline ? <CardButton price={eventInfo.onlinePrice/100}>Online</CardButton> : ''}
    </SelectionContainer>
  );
}

const SelectionContainer = styled.div`
  display: flex;
`;
