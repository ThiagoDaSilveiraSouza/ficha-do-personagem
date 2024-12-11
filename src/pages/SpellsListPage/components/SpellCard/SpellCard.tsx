import styled, { CSSProperties } from "styled-components";
import { SpellType } from "../../../../interfaces";
import { schools } from "../../../../data/schools";
import { UseModalsContext, UseSelectedData } from "../../../../context";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: fit-content;
  max-width: 320px;
  width: 100%;
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

type SpellCardType = {
  currentCard: SpellType;
};

export const SpellCard = ({ currentCard }: SpellCardType) => {
  const { updateSelectedData } = UseSelectedData();
  const { updateModalProps } = UseModalsContext();
  const headerColor = schools.find(
    ({ name }) => name === currentCard.school
  )?.color;
  // const nivelText =
  //   currentCard.nivel === "0" ? "Truque" : "nivel " + currentCard.nivel;

  return (
    <Card>
      <HeaderContainer
        $backgroundcolor={headerColor}
        // onClick={() => setIsOpen((prev) => !prev)}
        onClick={() => {
          updateSelectedData("selectedSpell", currentCard);
          updateModalProps("SpellModal", "isOpen", true);
        }}
      >
        <h5>{currentCard.name}</h5>
      </HeaderContainer>
    </Card>
  );
};
