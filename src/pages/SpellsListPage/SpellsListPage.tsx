import { SpellCard } from "./components";
import { SpellsListPageHook } from "./SpellsListPageHook";
import {
  CheckboxOption,
  FilterContainer,
  FilterSubtitle,
  FilterButton,
  RadioGroupContainer,
  SearchInput,
  SpellsCardsContainer,
  SpellNivelDisplay,
  SpellNivelContainer,
  NivelTitleContainer,
  NivelTitle,
  FilterButtonContainer,
} from "./style";
import { nivelsProps } from "../../interfaces";
import { PageContainer } from "../../componetsStyled";

export const SpellsListPage = () => {
  const {
    classesInputState,
    schoolsInputState,
    nivelsInputState,
    searchInputValue,
    spellsByNivel,
    filterContainerIsOpen,
    FilterFormRef,
    clearFilters,
    setSearchInputValue,
    spellFilterClassInputHandleCheck,
    spellFilterSchoolInputHandleCheck,
    nivelContainerToggle,
    setFilterContainerIsOpen,
  } = SpellsListPageHook();

  return (
    <PageContainer $alingitems="center">
      <h1>Lista de Magias</h1>
      <FilterButtonContainer>
        <FilterButton
          onClick={() => setFilterContainerIsOpen((prevState) => !prevState)}
        >
          Filtros
        </FilterButton>
        <FilterButton onClick={() => clearFilters()}>
          Limpar filtros
        </FilterButton>
      </FilterButtonContainer>
      <FilterContainer
        $isopen={filterContainerIsOpen.toString()}
        ref={FilterFormRef}
      >
        <RadioGroupContainer>
          <FilterSubtitle>Classe</FilterSubtitle>
          {Object.keys(classesInputState).map((key, index) => (
            <CheckboxOption key={"classe-" + key + index}>
              <input
                type="checkbox"
                name="classes"
                value={key}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  spellFilterClassInputHandleCheck(key, event.target.checked)
                }
                checked={classesInputState[key].status}
              />
              <span>{key}</span>
            </CheckboxOption>
          ))}
        </RadioGroupContainer>
        <RadioGroupContainer>
          <FilterSubtitle>Escolas</FilterSubtitle>
          {Object.keys(schoolsInputState).map((key, index) => (
            <CheckboxOption key={"school-" + key + index}>
              <input
                type="checkbox"
                name="classes"
                value={key}
                checked={schoolsInputState[key].status}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  spellFilterSchoolInputHandleCheck(key, event.target.checked)
                }
              />
              <span>{key}</span>
            </CheckboxOption>
          ))}
        </RadioGroupContainer>
        <RadioGroupContainer>
          <FilterSubtitle>Nível </FilterSubtitle>
          {Object.keys(nivelsInputState).map((key) => (
            <CheckboxOption key={"nivel-filter-" + key}>
              <input
                type="checkbox"
                name="classes"
                checked={nivelsInputState[key as nivelsProps].status}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  nivelContainerToggle(key as nivelsProps, event.target.checked)
                }
              />
              <span>{key === "0" ? "Truques" : "nível " + key}</span>
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
                <SpellNivelDisplay>
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
    </PageContainer>
  );
};
