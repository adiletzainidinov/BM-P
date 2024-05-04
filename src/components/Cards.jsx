import React from 'react';
import { styled } from 'styled-components';

const Cards = ({
  start,
  img,
  title,
  text,
  linkText,
  link,
  backgroundColor,
}) => {
  return (
    <CardPapa style={{ backgroundColor: backgroundColor }}>
      <StyledH5>{start}</StyledH5>
      <StyledDiv>
        <StyledImg src={img} alt={title} />
        <StyledH2>{title}</StyledH2>
      </StyledDiv>
      <StyledP>{text}</StyledP>
      <Styledh6>
        <a href={link}>{linkText}</a>
      </Styledh6>
    </CardPapa>
  );
};

export default Cards;

const CardPapa = styled.div`
  width: 500px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.25);
  padding: 27px;
  margin-top: 30px;
  border-radius: 20px;
  margin-bottom: 30px;
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.3s;
  &:hover{
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.25);
    transform: scale(1.1)
  }
`;

const StyledDiv = styled.div`
  display: flex;
  margin-bottom: 12px;
`;
const StyledH5 = styled.h5`
  margin-bottom: 15px;
  font-size: 18px;
  color: #4f4f4f;
`;

const StyledImg = styled.img`
    width: 70px;
    height: 70px;
    margin-top: 5px;
`

const StyledH2 = styled.h2`
    font-weight: 500;
    font-size: 28px;
    margin-left: 20px;
`

const StyledP = styled.p`
    line-height: 26px;
    color: #4F4F4F;
    font-size: 18px;
    margin-bottom: 25px;
`

const Styledh6 = styled.h6`
    text-align: end;
    font-size: 16px;
    transition: box-shadow 0.3s, transform 0.3s;
  &:hover{
    transform: scale(1.03)
  }
`