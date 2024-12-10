import { ReactNode, useEffect } from "react";
import styled, { CSSProperties } from "styled-components";

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
  transition: 0.3s;
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

type ModalCardProps = {
  $isopen: string;
  $padding?: CSSProperties["padding"];
  $backgroundcolor?: CSSProperties["backgroundColor"];
};

const ModalCard = styled.div<ModalCardProps>`
  position: relative;
  padding: ${({ $padding = "30px" }) => $padding};
  box-sizing: border-box;
  background: ${({ $backgroundcolor = "white" }) => $backgroundcolor};
  box-shadow: 0 0 3px 0 gray;
  transform: ${({ $isopen }) =>
    $isopen === "true" ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${({ $isopen }) => ($isopen === "true" ? "1" : "0")};
  transition: 0.3s;
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
  z-index: 1;

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
  useModal: [boolean, (isOpen: boolean) => void];
  cardPadding?: CSSProperties["padding"];
  cardBackgroundColor?: CSSProperties["backgroundColor"];
  children?: ReactNode;
};

export const MainModal = ({
  useModal,
  cardPadding,
  cardBackgroundColor,
  children,
}: MainModalProps) => {
  const [isOpen, setIsOpen] = useModal;

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <ModalContainer $isopen={isOpen.toString()}>
      <ModalBackground onClick={() => setIsOpen(false)} />
      <ModalCard
        $isopen={isOpen.toString()}
        $padding={cardPadding}
        $backgroundcolor={cardBackgroundColor}
      >
        <ModalCardClosebutton onClick={() => setIsOpen(false)} />
        {children}
      </ModalCard>
    </ModalContainer>
  );
};
