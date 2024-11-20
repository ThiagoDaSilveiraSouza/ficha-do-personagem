import { useState } from "react";
import { spells } from "../../data/spells";
import { SpellType } from "../../interfaces";
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
  {}
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

export const SpellsListPageHook = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [classesInputState, setClassesInputState] =
    useState(defaultClassStatus);
  const [schoolsInputState, setSchoolsInputState] =
    useState(defaultSchoolsStatus);

  const filteredSpells = [
    filterBySearchInput,
    filterByClass,
    filterBySchool,
  ].reduce((filteredSpells, currentFilter) => {
    return currentFilter(filteredSpells);
  }, spells);

  const spellsByColumns = filteredSpells.reduce(
    (columns, currentSpell, index) => {
      columns[index % 4].push(currentSpell);
      return columns;
    },
    [[], [], [], []] as SpellType[][]
  );

  const spellFilterClassInputHandleCheck = (
    className: keyof typeof classesInputState,
    status: boolean
  ) => {
    setClassesInputState((prevState) => {
      const updatedState = { ...prevState };
      updatedState[className].status = status;

      console.log(className, updatedState[className].status);
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
    spellsByColumns,
    searchInputValue,
    setSearchInputValue,
    spellFilterClassInputHandleCheck,
    spellFilterSchoolInputHandleCheck,
  };
};
