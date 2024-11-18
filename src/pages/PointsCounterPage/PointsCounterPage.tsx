import styled from "styled-components";
import { PointsCouterHook } from "./PointsCounterPageHook";

const PageContainer = styled.main`
  display: flex;
  align-items: start;
  gap: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  border: 1px solid white;
  gap: 5px;
  padding: 5px 0;
`;
const Input = styled.input`
  font-size: 25px;
  text-align: center;
  width: 60px;
  border: none;
  &&[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &&[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;
const Span = styled.span`
  font-size: 14px;
`;

const UsedPointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px;
  box-sizing: border-box;
  h5 {
    margin: 0;
  }
`;
const DataContainer = styled.div`
  background: black;
  padding: 10px 0;
`;
const CountContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
`;
const CountButton = styled.button``;

const ResetButton = styled.button``;

export const PointsCounterPage = () => {
  const {
    setMaxPoints,
    resetButtonHandlerClick,
    calculateModificator,
    inputHandlerChange,
    CountButtonHandleClick,
    pointsValues,
    usedPoints,
    maxPoints,
  } = PointsCouterHook();

  return (
    <PageContainer>
      <Form>
        {Object.entries(pointsValues).map(([key, value]) => {
          const habilityName = key as keyof typeof pointsValues;
          const modificator = calculateModificator(value);
          const isPositiveNumber = modificator > 0;

          return (
            <Label key={key}>
              {key}
              <CountContainer>
                <CountButton
                  type="button"
                  onClick={() =>
                    CountButtonHandleClick("decrease", habilityName)
                  }
                >
                  -
                </CountButton>
                <Input
                  max={15}
                  min={8}
                  type="number"
                  value={value}
                  onChange={(event) =>
                    inputHandlerChange(
                      key as keyof typeof pointsValues,
                      event.target.value
                    )
                  }
                />
                <CountButton
                  type="button"
                  onClick={() =>
                    CountButtonHandleClick("increase", habilityName)
                  }
                >
                  +
                </CountButton>
              </CountContainer>
              <Span>
                {isPositiveNumber && "+"}
                {modificator}
              </Span>
            </Label>
          );
        })}
      </Form>
      <DataContainer>
        <ResetButton onClick={resetButtonHandlerClick}>Resetar</ResetButton>
        <UsedPointsContainer>
          <h5>
            Maximo <br />
            de pontos
          </h5>
          <Input
            type="number"
            value={maxPoints}
            onChange={(event) => setMaxPoints(event.target.value)}
          />
        </UsedPointsContainer>
        <UsedPointsContainer>
          <h5>Pontos usados</h5>
          {usedPoints}
        </UsedPointsContainer>
      </DataContainer>
    </PageContainer>
  );
};
