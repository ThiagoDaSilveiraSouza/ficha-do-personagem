import { useCallback, useEffect, useState } from "react";
import { spells } from "../../data/spells";
import {
  ClassesType,
  DefaultStatusProps,
  NivelsProps,
  SchoolsType,
  SpellType,
} from "../../interfaces";
import { classes } from "../../data/classes";
import { schools } from "../../data/schools";
import { getStorage, setStorage, slugfy } from "../../utils";

const defaultClassStatus = classes.reduce<DefaultStatusProps<ClassesType>>(
  (classStatus, currentClass) => {
    const updatedClassStatus = { ...classStatus };
    const className = currentClass.name as keyof typeof updatedClassStatus;
    updatedClassStatus[className] = updatedClassStatus[className] || {
      status: false,
    };

    return updatedClassStatus;
  },
  {} as DefaultStatusProps<ClassesType>
);

const defaultSchoolsStatus = schools.reduce<DefaultStatusProps<SchoolsType>>(
  (defaultSchoolStatus, currentSchools) => {
    const updatedSchoolStatus = { ...defaultSchoolStatus };
    const schoolName = currentSchools.name as keyof typeof updatedSchoolStatus;
    updatedSchoolStatus[schoolName] = updatedSchoolStatus[schoolName] || {
      status: false,
    };

    return updatedSchoolStatus;
  },
  {} as DefaultStatusProps<SchoolsType>
);

const defaultNivelsStatus: DefaultStatusProps<Record<NivelsProps, any>> = {
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
  const [filterContainerIsOpen, setFilterContainerIsOpen] = useState(false);
  const [classesInputState, setClassesInputState] =
    useState(defaultClassStatus);
  const [schoolsInputState, setSchoolsInputState] =
    useState(defaultSchoolsStatus);
  const [nivelsInputState, setNivelsInputState] = useState(defaultNivelsStatus);
  const [spellsContainerOpenStatus, setSpellsContainerOpenStatus] =
    useState(defaultNivelsStatus);

  const saveFiltersInLocalStorage = () => {
    setTimeout(() => {
      setStorage("userFilters", {
        classes: classesInputState,
        nivels: spellsContainerOpenStatus,
        school: schoolsInputState,
      });
    }, 500);
  };
  const clearFilterInLocalStorage = () => {
    setTimeout(() => {
      setStorage("userFilters", {
        classes: defaultClassStatus,
        nivels: defaultNivelsStatus,
        school: defaultSchoolsStatus,
      });
    }, 500);
  };

  const nivelContainerToggle = useCallback(
    (nivel: NivelsProps, status: boolean) => {
      setNivelsInputState((prevState) => {
        const updatedState = { ...prevState };
        const targetNivel = nivel as keyof typeof updatedState;
        updatedState[targetNivel].status = status;

        return updatedState;
      });

      saveFiltersInLocalStorage();
    },
    [nivelsInputState]
  );

  const filteredSpells = [
    filterBySearchInput,
    filterByClass,
    filterBySchool,
    filterByNivel,
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
  }, {} as { [key in NivelsProps]: SpellType[] });

  const spellFilterClassInputHandleCheck = (
    className: keyof typeof classesInputState,
    status: boolean
  ) => {
    setClassesInputState((prevState) => {
      const updatedState = { ...prevState };
      updatedState[className].status = status;

      return updatedState;
    });
    saveFiltersInLocalStorage();
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

    saveFiltersInLocalStorage();
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

      const hasSomeClass = classesList.some(({ name }) => {
        return classesInputState?.[name as keyof typeof classesInputState]
          ?.status;
      });
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
      const hasSomeSchool =
        schoolsInputState[school as keyof SchoolsType].status;
      return hasSomeSchool;
    });
  }

  function filterByNivel(spellList: SpellType[]) {
    const hasAnyNivelSelected = Object.values(nivelsInputState).some(
      ({ status }) => status
    );

    if (!hasAnyNivelSelected) {
      return spellList;
    }
    return spellList.filter((currentSpell) => {
      const { nivel } = currentSpell;
      const hasSomeNivel = nivelsInputState[nivel].status;
      return hasSomeNivel;
    });
  }

  function filterBySearchInput(spellList: SpellType[]) {
    return spellList.filter((currentSpell) => {
      const filterHasName = slugfy(currentSpell.name).includes(
        slugfy(searchInputValue)
      );

      return filterHasName;
    });
  }

  const resetFilter = <T extends { [key: string]: { status: boolean } }>(
    targetObject: T
  ) => {
    const updatedObject = { ...targetObject };

    for (let key in updatedObject) {
      updatedObject[key].status = false;
    }
    return updatedObject;
  };

  function clearFilters() {
    setClassesInputState(resetFilter);
    setSchoolsInputState(resetFilter);
    setNivelsInputState(resetFilter);
    clearFilterInLocalStorage();
  }

  const updateSpellsContainerOpenStatus = (
    containerPropName: keyof typeof spellsContainerOpenStatus,
    updateStatus: boolean
  ) =>
    setSpellsContainerOpenStatus((prevState) => ({
      ...prevState,
      [containerPropName]: { status: updateStatus },
    }));

  const updateFiltersFromLocalStorage = () => {
    const filtersFromLocalStorage = getStorage("userFilters");

    if (filtersFromLocalStorage) {
      const { classes, nivels, school } = filtersFromLocalStorage;
      setClassesInputState(classes);
      setSchoolsInputState(school);
      setNivelsInputState(nivels);
    }
  };

  useEffect(() => {
    updateFiltersFromLocalStorage();
  }, []);

  return {
    // spellsByColumns,
    classesInputState,
    schoolsInputState,
    nivelsInputState,
    spellsByNivel,
    searchInputValue,
    filterContainerIsOpen,
    spellsContainerOpenStatus,
    clearFilters,
    setFilterContainerIsOpen,
    setSearchInputValue,
    spellFilterClassInputHandleCheck,
    spellFilterSchoolInputHandleCheck,
    nivelContainerToggle,
    updateSpellsContainerOpenStatus,
  };
};
