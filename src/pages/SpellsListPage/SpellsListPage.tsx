import { SpellCard } from "./components";
import { SpellsListPageHook } from "./SpellsListPageHook";
import { classes } from "../../data/classes";
import {
  CheckboxOption,
  FilterContainer,
  FilterSubtitle,
  FilterTitle,
  RadioGroupContainer,
  SearchInput,
  SpellsCardsContainer,
  SpellsColumns,
} from "./style";
import { schools } from "../../data/schools";

export const SpellsListPage = () => {
  const {
    spellsByColumns,
    searchInputValue,
    setSearchInputValue,
    spellFilterClassInputHandleCheck,
    spellFilterSchoolInputHandleCheck,
  } = SpellsListPageHook();

  return (
    <div>
      <h1>Lista de Magias</h1>
      <FilterContainer>
        <FilterTitle>Filtros</FilterTitle>
        <RadioGroupContainer>
          <FilterSubtitle>Classe</FilterSubtitle>
          {classes.map((currentClass) => (
            <CheckboxOption key={currentClass.id}>
              <input
                type="checkbox"
                name="classes"
                value={currentClass.name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  spellFilterClassInputHandleCheck(
                    currentClass.name,
                    event.target.checked
                  )
                }
              />
              <span>{currentClass.name}</span>
            </CheckboxOption>
          ))}
        </RadioGroupContainer>
        <RadioGroupContainer>
          <FilterSubtitle>Escolas</FilterSubtitle>
          {schools.map((currentSchool) => (
            <CheckboxOption key={currentSchool.id}>
              <input
                type="checkbox"
                name="classes"
                value={currentSchool.name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  spellFilterSchoolInputHandleCheck(
                    currentSchool.name,
                    event.target.checked
                  )
                }
              />
              <span>{currentSchool.name}</span>
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
        {spellsByColumns.map((currentColumn, index) => {
          return (
            <SpellsColumns key={"spell-column-" + index}>
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
