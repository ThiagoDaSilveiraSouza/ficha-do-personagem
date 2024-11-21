import { useCallback, useState } from "react";
import { spells } from "../../data/spells";
import { nivelsProps, SpellType } from "../../interfaces";
import { classes } from "../../data/classes";
import { schools } from "../../data/schools";

type defaultStatusProps = {
  [key: string]: {
    status: boolean;
  };
};

const defaultClassStatus = classes.reduce<defaultStatusProps>(
  (classStatus, currentClass) => {
    const updatedClassStatus = { ...classStatus };
    const className = currentClass.name as keyof typeof updatedClassStatus;
    updatedClassStatus[className] = updatedClassStatus[className] || {
      status: false,
    };

    return updatedClassStatus;
  },
  {} as defaultStatusProps
);

const defaultSchoolsStatus = schools.reduce<defaultStatusProps>(
  (defaultSchoolStatus, currentSchools) => {
    const updatedSchoolStatus = { ...defaultSchoolStatus };
    const schoolName = currentSchools.name as keyof typeof updatedSchoolStatus;
    updatedSchoolStatus[schoolName] = updatedSchoolStatus[schoolName] || {
      status: false,
    };

    return updatedSchoolStatus;
  },
  {}
);

const nivelContainerOpenListDefault = {
  "0": { status: false },
  "1": { status: false },
  "2": { status: false },
  "3": { status: false },
  "4": { status: false },
  "5": { status: false },
  "6": { status: false },
  "7": { status: false },
  "8": { status: false },
  "9": { status: false },
};

export const SpellsListPageHook = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [classesInputState, setClassesInputState] =
    useState(defaultClassStatus);
  const [schoolsInputState, setSchoolsInputState] =
    useState(defaultSchoolsStatus);
  const [nivelContainerOpenList, setNivelContainerOpenList] = useState(
    nivelContainerOpenListDefault
  );

  const nivelContainerToggle = useCallback(
    (nivel: nivelsProps, status: boolean) => {
      setNivelContainerOpenList((prevState) => {
        const updatedState = { ...prevState };
        const targetNivel = nivel as keyof typeof updatedState;
        updatedState[targetNivel].status = status;

        return updatedState;
      });
    },
    []
  );

  const filteredSpells = [
    filterBySearchInput,
    filterByClass,
    filterBySchool,
  ].reduce((filteredSpells, currentFilter) => {
    return currentFilter(filteredSpells);
  }, spells);

  const spellsByNivel = filteredSpells.reduce((spellsByNivel, currentSpell) => {
    const updatedList = { ...spellsByNivel };
    const currentNivel = currentSpell.nivel as keyof typeof updatedList;

    updatedList[currentNivel] =
      updatedList[currentNivel] || ([] as (typeof currentSpell)[]);
    updatedList[currentNivel].push(currentSpell);

    return updatedList;
  }, {} as { [key in nivelsProps]: SpellType[] });

  const spellFilterClassInputHandleCheck = (
    className: keyof typeof classesInputState,
    status: boolean
  ) => {
    setClassesInputState((prevState) => {
      const updatedState = { ...prevState };
      updatedState[className].status = status;

      return updatedState;
    });
  };

  const spellFilterSchoolInputHandleCheck = (
    schoolName: keyof typeof schoolsInputState,
    status: boolean
  ) => {
    setSchoolsInputState((prevState) => {
      const updatedState = { ...prevState };
      updatedState[schoolName].status = status;

      return updatedState;
    });
  };

  function filterByClass(spellList: SpellType[]) {
    const hasAnyClassSelected = Object.values(classesInputState).some(
      ({ status }) => status
    );

    if (!hasAnyClassSelected) {
      return spellList;
    }
    return spellList.filter((currentSpell) => {
      const { classesList } = currentSpell;
      const hasSomeClass = classesList.some(
        ({ name }) =>
          classesInputState?.[name as keyof typeof classesInputState]?.status
      );
      return hasSomeClass;
    });
  }

  function filterBySchool(spellList: SpellType[]) {
    const hasAnySchoolSelected = Object.values(schoolsInputState).some(
      ({ status }) => status
    );

    if (!hasAnySchoolSelected) {
      return spellList;
    }

    return spellList.filter((currentSpell) => {
      const { school } = currentSpell;
      const hasSomeSchool = schoolsInputState[school].status;
      return hasSomeSchool;
    });
  }

  function filterBySearchInput(spellList: SpellType[]) {
    return spellList.filter((currentSpell) => {
      const filterHasName = currentSpell.name.includes(searchInputValue);

      return filterHasName;
    });
  }

  return {
    // spellsByColumns,
    spellsByNivel,
    searchInputValue,
    nivelContainerOpenList,
    setSearchInputValue,
    spellFilterClassInputHandleCheck,
    spellFilterSchoolInputHandleCheck,
    nivelContainerToggle,
  };
};
