import React from 'react';
import bacgkroundBlue from '../assets/Rectangle 141.png';
import tochka from '../assets/Group 594.png';
import css, { styled } from 'styled-components';
import vector from '../assets/Vector.png';
import vector181 from '../assets/Vector 181.png';
import vector1 from '../assets/Vector (1).png';
import Vector2 from '../assets/Vector (2).png';

const BermetEducation = () => {
  return (
    <styledDiv>
      <StyledImg src={bacgkroundBlue} alt="img" />
      <StyledTochkaImg src={tochka} alt="img" />
      <VectorImg src={vector} alt="img" />
      <Vector181Img src={vector181} alt="img" />
      <Vector1Img src={vector1} alt="img" />
      <Vector2Img src={Vector2} alt="img" />
      <StyledH1>
        Оброзавательная площадка <br />
      </StyledH1>
      <Styledh2>для прекрассной Бермет</Styledh2>
      <StyledP>Ты самая красивая умная и амбициозная</StyledP>
    </styledDiv>
  );
};

export default BermetEducation;

const styledDiv = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledTochkaImg = styled.img`
  position: absolute;
  top: 40px;
  left: 60px;
  width: 90%;
  height: 80%;
`;

const VectorImg = styled.img`
  position: absolute;
  top: 120px;
  left: 360px;
  width: 150px;
  height: 150px;
`;

const Vector181Img = styled.img`
  position: absolute;
  bottom: 40px;
  left: 250px;
  width: 450px;
  height: 150px;
`;

const Vector1Img = styled.img`
  position: absolute;
  bottom: 120px;
  left: 950px;
  width: 150px;
  height: 120px;
`;

const Vector2Img = styled.img`
  position: absolute;
  top: 70px;
  right: 0px;
  width: 150px;
  height: 150px;
`;

const StyledH1 = styled.h1`
  position: absolute;
  top: 170px;
  right: 210px;
  color: white;
  font-size: 55px;
  line-height: 80px;
  font-weight: bold;
`;

const Styledh2 = styled.h2`
  position: absolute;
  top: 260px;
  right: 410px;
  color: white;
  font-size: 46px;
  line-height: 80px;
  font-weight: bold;
`;

const StyledP = styled.p`
  position: absolute;
  bottom: 285px;
  right: 210px;
  color: white;
  font-size: 36px;
  line-height: 80px;
  letter-spacing: 2px
`;
