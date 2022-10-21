import styled from 'styled-components';

export default function CardButton({ price, children }) {
  return (
    <Box>
      <h3>{children}</h3>
      <h4>R$ {price}</h4>
    </Box>
  );
}

const Box = styled.div`
  border: 1px solid #cecece;
  width: 155px;
  height: 155px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 24px;
  margin-left: 0px;
  cursor: pointer;
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
