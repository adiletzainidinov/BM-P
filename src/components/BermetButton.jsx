import React from 'react';
import { styled } from 'styled-components';

const BermetButton = ({ text, srs }) => {
  return (
    <>
        <StyledButton>
          <a href={srs}>{text}</a>
        </StyledButton>
    </>
  );
};

export default BermetButton;


const StyledButton = styled.button`
  padding: 15px 25px;
  border-radius: 6px;
  border: none;
  font-size: 20px;
  background-color: #ffffff;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.3s;
  margin: 30px 0;
  a {
    text-decoration: none;
    color: #000000;
  }
  &:hover {
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.25);
    transform: scale(1.1);
  }
`;
