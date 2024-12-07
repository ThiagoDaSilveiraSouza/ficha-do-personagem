import { useState } from "react";
import { MainModal } from "../../../MainModal";

export const SpellModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <MainModal useModal={[isOpen, setIsOpen]}>
      <h1>SpellModal</h1>
    </MainModal>
  );
};
