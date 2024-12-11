import {
  ClassesType,
  NivelsProps,
  SchoolsType,
  SheetType,
} from "../interfaces";
import { DefaultStatusProps } from "../interfaces/DefaultStatusProps";

interface LocalStorageProps {
  userFilters: {
    school: DefaultStatusProps<SchoolsType>;
    classes: DefaultStatusProps<ClassesType>;
    nivels: DefaultStatusProps<Record<NivelsProps, any>>;
  };
  userSheets: SheetType[];
}

type LocalStorageKeys = keyof LocalStorageProps;

const storageTypes = {
  sessionStorage,
  localStorage,
};

export const setStorage = <T extends LocalStorageKeys>(
  propName: T,
  value: LocalStorageProps[T],
  storageTypeName: keyof typeof storageTypes = "localStorage"
) => {
  const stringValue = JSON.stringify(value);
  const currentStorageType = storageTypes[storageTypeName];

  currentStorageType.setItem(propName, stringValue);
};

export const getStorage = <T extends LocalStorageKeys>(
  propName: T,
  storageTypeName: keyof typeof storageTypes = "localStorage"
) => {
  const currentStorageType = storageTypes[storageTypeName];
  const storageValue = currentStorageType.getItem(propName);

  if (storageValue) {
    try {
      const dataValue = JSON.parse(storageValue) as LocalStorageProps[T];

      return dataValue;
    } catch (error) {
      console.error(storageValue);
      return;
    }
  }
};
