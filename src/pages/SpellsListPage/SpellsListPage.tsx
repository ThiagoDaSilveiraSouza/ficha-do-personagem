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
  FiltersListContainer,
} from "./style";
import { ClassesType, NivelsProps, SchoolsType } from "../../interfaces";
import { PageContainer } from "../../componetsStyled";
import { Acordion, MainModal } from "../../components";
import { FcClearFilters, FcFilledFilter, FcCollapse } from "react-icons/fc";

export const SpellsListPage = () => {
  const {
    classesInputState,
    schoolsInputState,
    nivelsInputState,
    searchInputValue,
    spellsByNivel,
    filterContainerIsOpen,
    spellsContainerOpenStatus,
    clearFilters,
    setSearchInputValue,
    spellFilterClassInputHandleCheck,
    spellFilterSchoolInputHandleCheck,
    nivelContainerToggle,
    setFilterContainerIsOpen,
    updateSpellsContainerOpenStatus,
  } = SpellsListPageHook();

  return (
    <PageContainer $alingitems="center">
      <h1>Lista de Magias</h1>
      <FilterButtonContainer>
        <FilterButton
          onClick={() => setFilterContainerIsOpen((prevState) => !prevState)}
        >
          Filtros
          <FcFilledFilter />
        </FilterButton>
      </FilterButtonContainer>
      <MainModal useModal={[filterContainerIsOpen, setFilterContainerIsOpen]}>
        <FilterContainer>
          <FilterButtonContainer>
            <FilterButton onClick={() => clearFilters()} type="button">
              Limpar filtros <FcClearFilters />
            </FilterButton>
          </FilterButtonContainer>
          <FiltersListContainer>
            <RadioGroupContainer>
              <FilterSubtitle>Classe</FilterSubtitle>
              {Object.keys(classesInputState).map((key, index) => (
                <CheckboxOption key={"classe-" + key + index}>
                  <input
                    type="checkbox"
                    name="classes"
                    value={key}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      spellFilterClassInputHandleCheck(
                        key as keyof ClassesType,
                        event.target.checked
                      )
                    }
                    checked={classesInputState[key as keyof ClassesType].status}
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
                    checked={schoolsInputState[key as keyof SchoolsType].status}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      spellFilterSchoolInputHandleCheck(
                        key as keyof SchoolsType,
                        event.target.checked
                      )
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
                    checked={nivelsInputState[key as NivelsProps].status}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      nivelContainerToggle(
                        key as NivelsProps,
                        event.target.checked
                      )
                    }
                  />
                  <span>{key === "0" ? "Truques" : "nível " + key}</span>
                </CheckboxOption>
              ))}
            </RadioGroupContainer>
          </FiltersListContainer>
        </FilterContainer>
      </MainModal>

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
            const currentContainerisOpen =
              currentNivel as keyof typeof spellsContainerOpenStatus;
            const isOpen =
              !!spellsContainerOpenStatus[currentContainerisOpen]?.status;

            return (
              <SpellNivelContainer key={"spell-column-" + index}>
                <NivelTitleContainer
                  onClick={() =>
                    updateSpellsContainerOpenStatus(
                      currentContainerisOpen,
                      !isOpen
                    )
                  }
                >
                  <NivelTitle $isopen={isOpen.toString()}>
                    {currentNivelTitle} <FcCollapse fill="black" />
                  </NivelTitle>
                </NivelTitleContainer>
                <Acordion isOpen={isOpen}>
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
                </Acordion>
              </SpellNivelContainer>
            );
          }
        )}
      </SpellsCardsContainer>
    </PageContainer>
  );
};
