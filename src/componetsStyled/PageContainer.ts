import styled, { CSSProperties } from "styled-components";

type PageContainerProps = {
  $alingitems?: CSSProperties["alignItems"];
};

export const PageContainer = styled.main<PageContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $alingitems = "stretch" }) => $alingitems};
`;
