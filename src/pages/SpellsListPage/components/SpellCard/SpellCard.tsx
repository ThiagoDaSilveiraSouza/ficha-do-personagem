import { SpellType } from "../../../../interfaces";

type SpellCardType = {
  currentCard: SpellType;
};

export const SpellCard = ({ currentCard }: SpellCardType) => {
  return (
    <div>
      <h5>{currentCard.name}</h5>
    </div>
  );
};
