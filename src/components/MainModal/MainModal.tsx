import { Dispatch, ReactNode, SetStateAction } from "react";
import styled from "styled-components";

const ModalContainer = styled.div<{ $isopen: string }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: ${({ $isopen }) => ($isopen === "true" ? "1" : "0")};
  visibility: ${({ $isopen }) => ($isopen === "true" ? "visible" : "hidden")};
  transition: 0.3s opacity visibility;
`;
const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;
const ModalCard = styled.div<{ $isopen: string }>`
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background: white;
  box-shadow: 0 0 3px 0 gray;
  transform: ${({ $isopen }) =>
    $isopen === "true" ? "translateY(0)" : "translateY(-100%)"};
  transition: 0.3s transform;
`;
const ModalCardClosebutton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: black;
  }

  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

type MainModalProps = {
  useModal: [boolean, Dispatch<SetStateAction<boolean>>];
  children?: ReactNode;
};

export const MainModal = ({ useModal, children }: MainModalProps) => {
  const [isOpen, setIsOpen] = useModal;

  return (
    <ModalContainer $isopen={isOpen.toString()}>
      <ModalBackground onClick={() => setIsOpen(false)} />
      <ModalCard $isopen={isOpen.toString()}>
        <ModalCardClosebutton onClick={() => setIsOpen(false)} />
        {children}
      </ModalCard>
    </ModalContainer>
  );
};
