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
  SpellNivelDisplay,
  SpellNivelContainer,
  NivelTitleContainer,
  NivelTitle,
} from "./style";
import { schools } from "../../data/schools";
import { nivelsProps } from "../../interfaces";

export const SpellsListPage = () => {
  const {
    searchInputValue,
    spellsByNivel,
    nivelContainerOpenList,
    setSearchInputValue,
    spellFilterClassInputHandleCheck,
    spellFilterSchoolInputHandleCheck,
    nivelContainerToggle,
  } = SpellsListPageHook();

  return (
    <div>
      <h1>Lista de Magias</h1>
      <FilterTitle>Filtros</FilterTitle>
      <FilterContainer>
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
      </FilterContainer>
      <SearchInput
        value={searchInputValue}
        onChange={(event) => setSearchInputValue(event.target.value)}
        placeholder="Pesquisar"
      />
      <SpellsCardsContainer>
        {Object.entries(spellsByNivel).map(
          ([currentNivel, currentSpellList], index) => {
            const currentNivelTitle =
              currentNivel === "0" ? "Truques" : currentNivel + " nível:";
            const isShow =
              nivelContainerOpenList[
                currentNivel as keyof typeof nivelContainerOpenList
              ].status.toString();
            return (
              <SpellNivelContainer key={"spell-column-" + index}>
                <NivelTitleContainer>
                  <NivelTitle>{currentNivelTitle}</NivelTitle>
                  <input
                    type="checkbox"
                    onChange={(event) =>
                      nivelContainerToggle(
                        currentNivel as nivelsProps,
                        event.target.checked
                      )
                    }
                  />
                </NivelTitleContainer>
                <SpellNivelDisplay $isshow={isShow}>
                  {currentSpellList.map((currentCard) => {
                    return (
                      <SpellCard
                        currentCard={currentCard}
                        key={"spell-card-" + currentCard.id}
                      />
                    );
                  })}
                </SpellNivelDisplay>
              </SpellNivelContainer>
            );
          }
        )}
      </SpellsCardsContainer>
    </div>
  );
};
