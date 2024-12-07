import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import * as Modals from "../../components/ModalsContainer/Modals";

type ModalsProps = {
  isOpen: boolean;
};

type defaultModalContextValueProps = {
  [key in keyof typeof Modals]: ModalsProps;
};
const defaultModalContextValue: defaultModalContextValueProps = {
  SpellModal: { isOpen: false },
};

type ModalsContextProps = [
  defaultModalContextValueProps,
  Dispatch<SetStateAction<defaultModalContextValueProps>>
];

const ModalsContext = createContext<ModalsContextProps>([
  defaultModalContextValue,
  () => {},
]);

type ModalsContextProviderProps = {
  children?: ReactNode;
};

export const ModalsContextProvider = ({
  children,
}: ModalsContextProviderProps) => {
  const [value, setValue] = useState(defaultModalContextValue);
  return (
    <ModalsContext.Provider value={[value, setValue]}>
      {children}
    </ModalsContext.Provider>
  );
};

export const UseModalsContext = () => {
  const [modalsStatus, setModalsStatus] = useContext(ModalsContext);

  const updateModalProps = <T extends keyof ModalsProps>(
    modalName: keyof typeof modalsStatus,
    propKey: T,
    value: ModalsProps[T]
  ) =>
    setModalsStatus((prevState) => ({
      ...prevState,
      [modalName]: { ...prevState[modalName], [propKey]: value },
    }));

  return { modalsStatus, updateModalProps };
};
