import { MainModal } from "../../../MainModal";
import { UseModalsContext } from "../../../../context";

export const SpellModal = () => {
  const { modalsStatus, updateModalProps } = UseModalsContext();

  const updateModalStatus = (isOpen: boolean) => {
    updateModalProps("SpellModal", "isOpen", isOpen);
  };
  return (
    <MainModal useModal={[modalsStatus.SpellModal.isOpen, updateModalStatus]}>
      <h1>SpellModal</h1>
    </MainModal>
  );
};
