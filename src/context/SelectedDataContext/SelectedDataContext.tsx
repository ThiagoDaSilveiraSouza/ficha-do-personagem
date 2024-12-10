import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { SpellType } from "../../interfaces";

type SelectDataContextDefaultProps = {
  selectedSpell: SpellType | null;
};

const SelectDataContextDefault: SelectDataContextDefaultProps = {
  selectedSpell: null,
};

type SelectedDataContextProps = [
  SelectDataContextDefaultProps,
  Dispatch<SetStateAction<SelectDataContextDefaultProps>>
];

const SelectedDataContext = createContext<SelectedDataContextProps>([
  SelectDataContextDefault,
  () => {},
]);

type SelectedDataContextProviderProps = {
  children: ReactNode;
};

export const SelectedDataContextProvider = ({
  children,
}: SelectedDataContextProviderProps) => {
  const [state, setState] = useState(SelectDataContextDefault);
  return (
    <SelectedDataContext.Provider value={[state, setState]}>
      {children}
    </SelectedDataContext.Provider>
  );
};

export const UseSelectedData = () => {
  const [selectedData, setSelectedData] = useContext(SelectedDataContext);

  const updateSelectedData = <T extends keyof typeof selectedData>(
    selectDataPropName: T,
    value: (typeof selectedData)[T]
  ) =>
    setSelectedData((prevState) => ({
      ...prevState,
      [selectDataPropName]: value,
    }));

  return { ...selectedData, updateSelectedData };
};
