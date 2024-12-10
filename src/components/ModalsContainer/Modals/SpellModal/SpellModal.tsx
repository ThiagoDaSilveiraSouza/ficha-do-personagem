import { MainModal } from "../../../MainModal";
import { UseModalsContext, UseSelectedData } from "../../../../context";
import styled, { CSSProperties } from "styled-components";
import { schools } from "../../../../data/schools";
import { useEffect } from "react";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: fit-content;

  width: 100%;
  max-width: 320px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    /* transform: translateY(-2px); */
  }
`;

type HeaderContainerProps = {
  $backgroundcolor?: CSSProperties["backgroundColor"];
};

const HeaderContainer = styled.div<HeaderContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: ${({ $backgroundcolor = "#f9f9f9" }) => $backgroundcolor};
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;

  h5 {
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    color: rgb(80, 80, 80);
    color: rgb(30, 30, 30);
    color: rgb(50, 50, 50);
  }
`;

type BodyContainerProps = {
  $isopen: string;
};

const BodyContainer = styled.div<BodyContainerProps>`
  position: relative;
  padding: ${({ $isopen }) => ($isopen === "true" ? "16px" : "0 16px")};
  box-sizing: border-box;
  max-height: ${({ $isopen }) => ($isopen === "true" ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
  background: #fff;
  color: #555;
  font-size: 0.95rem;
`;

const PropertieContainer = styled.div`
  margin-bottom: 4px;
  color: #444;
  font-weight: 500;
  text-align: start;

  span {
    font-weight: 400;
    color: #666;
  }
`;

const DescriptionContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  height: 200px;

  h6 {
    margin: 0;
    margin-bottom: 8px;
    font-size: 1rem;
    color: #333;
  }
  div {
    overflow-y: auto;
    padding: 0 10px;
    p {
      font-size: 0.9rem;
      color: #555;
      line-height: 1.5;
      text-align: justify;
    }

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: #f4f4f4;
    }

    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;

export const SpellModal = () => {
  const { modalsStatus, updateModalProps } = UseModalsContext();
  const { selectedSpell, updateSelectedData } = UseSelectedData();

  const updateModalStatus = (isOpen: boolean) => {
    updateModalProps("SpellModal", "isOpen", isOpen);
  };

  const headerColor = schools.find(
    ({ name }) => name === selectedSpell?.school
  )?.color;

  const nivelText =
    selectedSpell?.nivel === "0" ? "Truque" : "nivel " + selectedSpell?.nivel;

  useEffect(() => {
    if (!modalsStatus.SpellModal.isOpen) {
      updateSelectedData("selectedSpell", null);
    }
  }, [modalsStatus]);

  if (!selectedSpell) {
    return (
      <MainModal useModal={[modalsStatus.SpellModal.isOpen, updateModalStatus]}>
        <h1>Nenhuma magia selecionada</h1>
      </MainModal>
    );
  }

  return (
    <MainModal
      useModal={[modalsStatus.SpellModal.isOpen, updateModalStatus]}
      cardPadding="0"
      cardBackgroundColor="trasnparent"
    >
      <Card>
        <HeaderContainer $backgroundcolor={headerColor}>
          <h5>{selectedSpell?.name}</h5>
          {/* <HiddenCardButton
            $isopen={"true"}
            // aria-label={isOpen ? "Fechar detalhes" : "Abrir detalhes"}
          /> */}
        </HeaderContainer>
        <BodyContainer $isopen={"true"}>
          <PropertieContainer>
            Nível: <span>{nivelText}</span>
          </PropertieContainer>
          <PropertieContainer>
            Escola: <span>{selectedSpell?.school}</span>
          </PropertieContainer>
          <PropertieContainer>
            Componentes: <span>{selectedSpell?.components}</span>
          </PropertieContainer>
          <PropertieContainer>
            Concentração:{" "}
            <span>{selectedSpell?.concentration ? "Sim" : "Não"}</span>
          </PropertieContainer>
          <PropertieContainer>
            Distância: <span>{selectedSpell?.range}</span>
          </PropertieContainer>
          <PropertieContainer>
            Duração: <span>{selectedSpell?.duration}</span>
          </PropertieContainer>
          <DescriptionContainer>
            <h6>Descrição</h6>
            <div>
              {selectedSpell?.description.map((currentDescription, index) => (
                <p key={"spell" + selectedSpell?.id + "-paragraph-" + index}>
                  {currentDescription}
                </p>
              ))}
            </div>
          </DescriptionContainer>
        </BodyContainer>
      </Card>
    </MainModal>
  );
};
