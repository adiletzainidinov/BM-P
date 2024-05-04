import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const LogicButtons = ({ onClick, id, btnText, website, mainText, adilet }) => {
  const [inputvalue, setInputValue] = useState('');
  const [click, setClicked] = useState(false);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <>
      <ButtonStyledM onClick={onClick} id={id}>
        {btnText}
      </ButtonStyledM>
      {website && id === 'website' && (
        <CardPapaDiv>
          <div>
            <p>{mainText}</p>
          </div>
          <ButtonStyledM onClick={onClick}>Назад</ButtonStyledM>
        </CardPapaDiv>
      )}
      {adilet && id === 'adilet' && (
        <>
          {!click ? (
            <>
              <CardPapaDiv>
                <p>
                  Бермет,напишите последние 4 цифры номера телефона,если
                  неправильно написали,перезагрузите страницу
                </p>
                <input
                  type="password"
                  value={inputvalue}
                  onChange={handleInputValue}
                  placeholder="напишите последние 4 цифры номера телефона"
                />
                <ButtonStyledM type="submit" onClick={handleClick}>
                  click
                </ButtonStyledM>
              </CardPapaDiv>
            </>
          ) : (
            inputvalue === '6505' && (
              <CardPapaDiv>
                <p>{mainText}</p>
                <ButtonStyledM onClick={onClick}>Назад</ButtonStyledM>
              </CardPapaDiv>
            )
          )}
        </>
      )}
    </>
  );
};

export default LogicButtons;

const ButtonStyledM = styled.button`
  padding: 10px 55px;
  border: none;
  background-color: #3b3bff;
  font-size: 24px;
  border-radius: 10px;
  margin-top: 70px;
  margin-bottom: 30px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #6969ff;
  }
  &:active {
    background-color: #000083;
  }
`;

const CardPapaDiv = styled.div`
  position: relative;
  top: 200px;
  width: 500px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.15);
  margin-top: 30px;
  padding: 30px;
  border-radius: 10px;
  font-size: 18px;
  line-height: 28px;
  input {
    padding: 10px;
    width: 100%;
    margin-top: 40px;
    border: 2px solid blue;
    border-radius: 7px;
    outline: none;
    cursor: pointer;
    &:hover {
      border: 3px solid blue;
    }
  }
`;
