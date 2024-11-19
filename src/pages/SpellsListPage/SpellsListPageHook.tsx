import { useState } from "react";
import { spells } from "../../data/spells";
import { SpellType } from "../../interfaces";

export const SpellsListPageHook = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [classesInputState, setClassesInputState] = useState({});
  const filteredSpells = [filterBySearchInput].reduce(
    (filteredSpells, currentFilter) => {
      return currentFilter(filteredSpells);
    },
    spells
  );

  const spellsByColumns = filteredSpells.reduce(
    (columns, currentSpell, index) => {
      columns[index % 4].push(currentSpell);
      return columns;
    },
    [[], [], [], []] as SpellType[][]
  );

  function filterBySearchInput(spellList: SpellType[]) {
    return spellList.filter((currentSpell) => {
      const filterHasName = currentSpell.name.includes(searchInputValue);

      return filterHasName;
    });
  }

  return { spellsByColumns, searchInputValue, setSearchInputValue };
};
