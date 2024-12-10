import { ReactNode, useEffect, useRef, useState } from "react";
import styled, { CSSProperties } from "styled-components";

type AcordionContainerProps = {
  $maxheight?: CSSProperties["height"];
  $isOpen?: boolean;
};

const AcordionContainer = styled.div<AcordionContainerProps>`
  width: 100%;
  max-height: ${({ $isOpen, $maxheight }) =>
    $isOpen ? $maxheight + "px" : "0px"};
  transition: max-height 0.3s ease;
  overflow: hidden;
`;
const InsideContainer = styled.div``;

type AcordionProps = {
  children?: ReactNode;
  isOpen: boolean;
  style?: CSSProperties;
};

export const Acordion = ({ children, isOpen, style }: AcordionProps) => {
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);
  const insideContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (insideContainerRef.current) {
      setMaxHeight(insideContainerRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <AcordionContainer $maxheight={maxHeight} $isOpen={isOpen} style={style}>
      <InsideContainer ref={insideContainerRef}>{children}</InsideContainer>
    </AcordionContainer>
  );
};
