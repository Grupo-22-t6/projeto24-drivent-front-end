import { useContext, useState } from 'react';
import styled from 'styled-components';
import EventInfoContext from '../../contexts/EventInfoContext';

import CardButton from './CardButton';

export default function ModalitySelection() {
  const { eventInfo } = useContext(EventInfoContext);
  const [buttonStatus, setButtonStatus] = useState([false, false]);
  return (
    <SelectionContainer>
      {eventInfo.isPresential ? (
        <Span
          onClick={() => {
            if(buttonStatus[0] === buttonStatus[1]) {
              const newStatus = [true, false];
              setButtonStatus(newStatus);
            }
            if(buttonStatus[1] === true) {
              const newStatus = [true, false];
              setButtonStatus(newStatus);
            }
          }}
          buttonStatus={buttonStatus[0]}
        >
          <CardButton price={eventInfo.presentialPrice / 100}>Presencial</CardButton>
        </Span>
      ) : (
        ''
      )}
      {eventInfo.isOnline ? (
        <Span
          onClick={() => {
            if(buttonStatus[0] === buttonStatus[1]) {
              const newStatus = [false, true];
              setButtonStatus(newStatus);
            }
            if(buttonStatus[0] === true) {
              const newStatus = [false, true];
              setButtonStatus(newStatus);
            }
          }}
          buttonStatus={buttonStatus[1]}
        >
          <CardButton price={eventInfo.onlinePrice / 100}>Online</CardButton>
        </Span>
      ) : (
        ''
      )}
    </SelectionContainer>
  );
}

const SelectionContainer = styled.div`
  display: flex;
`;
const Span = styled.span`
  div {
    background-color: ${(props) => props.buttonStatus ? '#FFEED2' : '#FFFFFF'};
  }
`;
