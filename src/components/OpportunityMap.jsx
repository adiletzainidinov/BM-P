import React from 'react';
import Ellipse191 from '../assets/Ellipse 191.png';
import { styled } from 'styled-components';

const OpportunityMap = ({ img, title, text, btnText, btnLink }) => {
  return (
    <>
      <PapaDiv>
        <DivImg>
          <img className="imgKrug" src={Ellipse191} alt="img" />
          <img className="mainImg" src={img} alt="img" />
        </DivImg>
        <TitleH2>{title}</TitleH2>
        <TextP>{text}</TextP>
        <ButtonStuled>
          <a href={btnLink}>{btnText}</a>
        </ButtonStuled>
      </PapaDiv>
    </>
  );
};

export default OpportunityMap;

const PapaDiv = styled.div`
  width: 400px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.25);
  padding: 27px;
  margin-top: 30px;
  border-radius: 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const DivImg = styled.div`
  position: relative;
  width: 200px;
  height: 200px;

  .imgKrug {
    width: 200px;
    height: 200px;
  }
  .mainImg {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 170px;
    height: 170px;
    border-radius: 50%;
  }
`;

const TitleH2 = styled.h2`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const TextP = styled.p`
  font-size: 18px;
  color: #4f4f4f;
  line-height: 28px;
`;

const ButtonStuled = styled.button`
  padding: 10px 55px;
  border: none;
  background-color: #3b3bff;
  font-size: 24px;
  border-radius: 10px;
  margin-top: 70px;
  cursor: pointer;
  &:hover {
    background-color: #6969ff;
  }
  &:active {
    background-color: #000083;
  }
  a {
    color: white;
  }
`;
