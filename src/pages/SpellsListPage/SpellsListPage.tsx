import { SpellCard } from "./components";
import { SpellsListPageHook } from "./SpellsListPageHook";
import { classes } from "../../data/classes";
import {
  CheckboxOption,
  FilterContainer,
  RadioGroupContainer,
  SearchInput,
  SpellsCardsContainer,
  SpellsColumns,
} from "./style";

export const SpellsListPage = () => {
  const { spellsByColumns, searchInputValue, setSearchInputValue } =
    SpellsListPageHook();

  return (
    <div>
      <h1>Lista de Magias</h1>
      <FilterContainer>
        <RadioGroupContainer>
          {classes.map((currentClass) => (
            <CheckboxOption key={currentClass.id}>
              <input
                type="checkbox"
                name="classes"
                value={currentClass.name}
                // checked={selectedValue === option}
                // onChange={() => handleChange(option)}
              />
              <span>{currentClass.name}</span>
            </CheckboxOption>
          ))}
        </RadioGroupContainer>
        <SearchInput
          value={searchInputValue}
          onChange={(event) => setSearchInputValue(event.target.value)}
          placeholder="Pesquisar"
        />
      </FilterContainer>
      <SpellsCardsContainer>
        {spellsByColumns.map((currentColumn) => {
          return (
            <SpellsColumns>
              {currentColumn.map((currentCard) => {
                return (
                  <SpellCard
                    currentCard={currentCard}
                    key={"spell-card-" + currentCard.id}
                  />
                );
              })}
            </SpellsColumns>
          );
        })}
      </SpellsCardsContainer>
    </div>
  );
};
