import styled, { CSSProperties } from "styled-components";
import { SpellType } from "../../../../interfaces";
import { useState } from "react";
import { schools } from "../../../../data/schools";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: fit-content;

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

type HeaderContainerProps = {
  $backgroundcolor?: CSSProperties["backgroundColor"];
};

const HeaderContainer = styled.div<HeaderContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: ${({ $backgroundcolor = "#f9f9f9" }) => $backgroundcolor};
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;

  h5 {
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    color: rgb(80, 80, 80);
    color: rgb(30, 30, 30);
    color: rgb(50, 50, 50);
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
  text-align: start;

  span {
    font-weight: 400;
    color: #666;
  }
`;

const DescriptionContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  height: 200px;

  h6 {
    margin: 0;
    margin-bottom: 8px;
    font-size: 1rem;
    color: #333;
  }
  div {
    overflow-y: auto;
    padding: 0 10px;
    p {
      font-size: 0.9rem;
      color: #555;
      line-height: 1.5;
      text-align: justify;
    }

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: #f4f4f4;
    }

    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;

type SpellCardType = {
  currentCard: SpellType;
};

export const SpellCard = ({ currentCard }: SpellCardType) => {
  const [isOpen, setIsOpen] = useState(false);
  const headerColor = schools.find(
    ({ name }) => name === currentCard.school
  )?.color;
  const nivelText =
    currentCard.nivel === "0" ? "Truque" : "nivel " + currentCard.nivel;

  return (
    <Card>
      <HeaderContainer
        $backgroundcolor={headerColor}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h5>{currentCard.name}</h5>
        <HiddenCardButton
          $isopen={isOpen}
          aria-label={isOpen ? "Fechar detalhes" : "Abrir detalhes"}
        />
      </HeaderContainer>
      <BodyContainer $isopen={isOpen}>
        <PropertieContainer>
          Nível: <span>{nivelText}</span>
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
          <div>
            {currentCard.description.map((currentDescription) => (
              <p>{currentDescription}</p>
            ))}
          </div>
        </DescriptionContainer>
      </BodyContainer>
    </Card>
  );
};
