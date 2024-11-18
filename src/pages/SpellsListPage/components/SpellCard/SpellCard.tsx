import styled from "styled-components";
import { SpellType } from "../../../../interfaces";
import { useState } from "react";

const Card = styled.div`
  width: 280px;
  box-shadow: 0 0 3px 0 gray;
  border-radius: 5px;
  background: white;
  color: black;
  overflow: hidden;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 30px;

  h5 {
    flex: 1;
    margin: 0;
    font-size: 18px;
  }
`;

type HiddenCardButtonType = {
  $isopen: string;
};

const HiddenCardButton = styled.button<HiddenCardButtonType>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: gray;
  padding: 5px;
  margin: 0;
  border-radius: 0;
  height: 30px;
  width: 30px;

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    transform: ${({ $isopen }) =>
      $isopen === "true" ? "rotate(-135deg)" : "rotate(45deg)"};

    transition: 0.3s;
  }
`;

const BodyContainer = styled.div`
  padding: 5px;
  box-sizing: border-box;
  text-align: start;
`;

const PropertieContainer = styled.div`
  text-transform: capitalize;
`;

const DescriptionContainer = styled.div``;

type SpellCardType = {
  currentCard: SpellType;
};

export const SpellCard = ({ currentCard }: SpellCardType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card>
      <HeaderContainer>
        <h5>{currentCard.name}</h5>
        <HiddenCardButton
          $isopen={isOpen.toString()}
          onClick={() => setIsOpen((prevState) => !prevState)}
        />
      </HeaderContainer>
      <BodyContainer>
        <PropertieContainer>Nível: {currentCard.nivel}</PropertieContainer>
        <PropertieContainer>Escola: {currentCard.school}</PropertieContainer>
        <PropertieContainer>
          Components: {currentCard.components}
        </PropertieContainer>
        <PropertieContainer>Escola: {currentCard.school}</PropertieContainer>
        <DescriptionContainer>
          <h6>Descrição</h6>
          <p>{currentCard.description}</p>
        </DescriptionContainer>
      </BodyContainer>
    </Card>
  );
};
