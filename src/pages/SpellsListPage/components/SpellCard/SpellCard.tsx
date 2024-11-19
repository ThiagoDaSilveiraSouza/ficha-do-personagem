import styled from "styled-components";
import { SpellType } from "../../../../interfaces";
import { useState } from "react";

const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 320px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: #f9f9f9;
  border-bottom: 1px solid #e0e0e0;

  h5 {
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    color: #333;
  }
`;

type HiddenCardButtonType = {
  $isopen: boolean;
};

const HiddenCardButton = styled.button<HiddenCardButtonType>`
  background: none;
  border: none;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  outline: none !important;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  &:focus {
    outline: 2px solid #1976d2;
  }

  &::after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid #333;
    border-right: 2px solid #333;
    transform: ${({ $isopen }) =>
      $isopen ? "rotate(-135deg)" : "rotate(45deg)"};
    transition: transform 0.3s ease;
  }
`;

type BodyContainerProps = {
  $isopen: boolean;
};

const BodyContainer = styled.div<BodyContainerProps>`
  position: relative;
  padding: ${({ $isopen }) => ($isopen ? "16px" : "0 16px")};
  box-sizing: border-box;
  max-height: ${({ $isopen }) => ($isopen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
  background: #fff;
  color: #555;
  font-size: 0.95rem;
`;

const PropertieContainer = styled.div`
  margin-bottom: 4px;
  color: #444;
  font-weight: 500;

  span {
    font-weight: 400;
    color: #666;
  }
`;

const DescriptionContainer = styled.div`
  margin-top: 16px;

  h6 {
    margin: 0;
    margin-bottom: 8px;
    font-size: 1rem;
    color: #333;
  }

  p {
    font-size: 0.9rem;
    color: #555;
    line-height: 1.5;
  }
`;

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
          $isopen={isOpen}
          aria-label={isOpen ? "Fechar detalhes" : "Abrir detalhes"}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </HeaderContainer>
      <BodyContainer $isopen={isOpen}>
        <PropertieContainer>
          Nível: <span>{currentCard.nivel}</span>
        </PropertieContainer>
        <PropertieContainer>
          Escola: <span>{currentCard.school}</span>
        </PropertieContainer>
        <PropertieContainer>
          Componentes: <span>{currentCard.components}</span>
        </PropertieContainer>
        <PropertieContainer>
          Concentração: <span>{currentCard.concentration ? "Sim" : "Não"}</span>
        </PropertieContainer>
        <PropertieContainer>
          Distância: <span>{currentCard.range}</span>
        </PropertieContainer>
        <PropertieContainer>
          Duração: <span>{currentCard.duration}</span>
        </PropertieContainer>
        <DescriptionContainer>
          <h6>Descrição</h6>
          <p>{currentCard.description}</p>
        </DescriptionContainer>
      </BodyContainer>
    </Card>
  );
};
