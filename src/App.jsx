import { styled } from 'styled-components';
import './App.css';
import BermetEducation from './components/BermetEducation';
import Cards from './components/Cards';
import BermetButton from './components/BermetButton';
import OpportunityMap from './components/OpportunityMap';
import { useState } from 'react';
import {
  information,
  informationButton,
  opportunityMap,
} from './components/Massiv';
import LogicButtons from './components/LogicButtons';

function App() {
  const [website, setWebsite] = useState(false);
  const [adilet, setAdilet] = useState(false);

  const isTrue = () => {
    setWebsite((prev) => !prev);
  };
  const isTrueAdilet = () => {
    setAdilet((prev) => !prev);
  };

  const buttonInformation = [
    {
      id: 'website',
      btnText: 'узнать',
      mainText:
        'Этот проект — настоящий вау! Он представляет собой арт-объект в мире веб-разработки, где передовые технологии, такие как React и Styled Components, сочетаются с уникальным дизайном и функциональностью. Каждая строчка кода тщательно проработана, чтобы обеспечить максимальную производительность и эстетическое удовольствие.И это еще не все! Проект переплетает культуры и языки, используя арабский язык для текстовых элементов, что придает ему экзотическую атмосферу. Карточки программ обучения оформлены с особым вниманием к деталям, словно оживая и вдохновляя пользователей на новые учебные подвиги. Они являются истинным произведением искусства в образовательном мире. А пользовательский опыт здесь выше всяких похвал! Простота навигации, красота дизайна и функциональность создают уникальное взаимодействие с платформой, оставляя пользователей в восторге. Этот проект — не просто образовательная платформа. Это история о взаимодействии культур, вдохновляющая на обучение и рост!',
      onClick: isTrue,
    },
    {
      id: 'adilet',
      btnText: 'Адилет',
      mainText: `Ассаламу алайкум, Бермет!
  
        Я сделал что-то особенное и хотел поделиться этим с тобой. Это не просто проект, это что-то, что я делал с большой страстью и вдохновением.
        
        Каждая строчка этого кода пронизана моими чувствами и желанием сделать что-то уникальное. Я использовал передовые технологии, чтобы создать что-то необыкновенное, как ты.
        
        Когда я работал над этим, я думал о тебе и о том, какие чудеса мы могли бы совершить вместе, как творческий дуэт. Этот проект — наше начало, наша совместная история, которая только начинается.
        
        Я знаю, ты любишь красоту и эстетику, поэтому этот проект — это не просто код, это настоящее произведение искусства. Он так же особенный и уникален, как и ты.
        
        Надеюсь, этот проект заставит твоё сердце замирать так же, как оно замирает от твоей красоты и очарования. Жду твоего ответа и надеюсь, что этот проект станет нашим первым шагом к чему-то невероятному.
        
        С уважением,
        Адилет`,
      onClick: isTrueAdilet,
    },
  ];

  return (
    <>
      <div>
        <BermetEducation />

        <StyledH1>Все программы обучения</StyledH1>

        <StyledDiv>
          {information.map((item) => (
            <Cards
              key={item.id}
              start={item.start}
              img={item.img}
              title={item.title}
              text={item.text}
              linkText={item.linkText}
              link={item.link}
              backgroundColor={item.backgroundColor}
            />
          ))}
        </StyledDiv>

        <StyledH1Clikc>Просто кликни на текст</StyledH1Clikc>

        <StyledDivPapa>
          {informationButton.map((item) => (
            <BermetButton id={item.id} text={item.text} srs={item.srs} />
          ))}
        </StyledDivPapa>

        <StyledH1Clikc>
          Бермет у вас больше возможностей чем когда либо делайте дерзайте
        </StyledH1Clikc>

        <StyledDivPapa>
          {opportunityMap.map((item) => (
            <OpportunityMap
              id={item.id}
              img={item.img}
              title={item.title}
              text={item.text}
              btnText={item.btnText}
              btnLink={item.btnLink}
            />
          ))}
        </StyledDivPapa>

        <StyledDivPapa>
          {buttonInformation.map((item) => (
            <LogicButtons
              btnText={item.btnText}
              id={item.id}
              website={website}
              mainText={item.mainText}
              adilet={adilet}
              onClick={item.onClick}
            />
          ))}
        </StyledDivPapa>
      </div>
    </>
  );
}
export default App;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 50px;
  margin-top: 60px;
  margin-bottom: 30px;
`;

const StyledH1Clikc = styled.h1`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 50px;
  letter-spacing: 2px;
`;

const StyledDivPapa = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
`;
