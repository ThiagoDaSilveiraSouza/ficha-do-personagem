import styled from "styled-components";
import { spells } from "../../data/spells";
import { SpellCard } from "./components";

const SpellsCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
`;

export const SpellsListPage = () => {
  return (
    <div>
      <h1>Lista de Magias</h1>
      <SpellsCardsContainer>
        {spells.map((currentCard) => {
          return (
            <SpellCard
              currentCard={currentCard}
              key={"spell-card-" + currentCard.id}
            />
          );
        })}
      </SpellsCardsContainer>
    </div>
  );
};
