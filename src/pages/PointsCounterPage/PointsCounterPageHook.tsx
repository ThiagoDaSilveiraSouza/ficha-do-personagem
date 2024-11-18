import { useState } from "react";

const defaultPointsCosts = {
  "8": 0,
  "9": 1,
  "10": 2,
  "11": 3,
  "12": 4,
  "13": 5,
  "14": 7,
  "15": 9,
};

const defaultPointsValues = {
  str: "8",
  dex: "8",
  const: "8",
  int: "8",
  wind: "8",
  char: "8",
};

const defaultMaxPoints = "27";
const defaultMinPoints = "0";

export const PointsCouterHook = () => {
  const [pointsValues, setPointsValues] = useState(defaultPointsValues);
  const [maxPoints, setMaxPoints] = useState(defaultMaxPoints);
  const usedPoints = calculateUsedPoints(pointsValues);

  const calculateModificator = (attValue: string): number => {
    const attNumber = parseInt(attValue);
    return Math.floor((attNumber - 10) / 2);
  };

  const inputHandlerChange = (
    inputName: keyof typeof defaultPointsValues,
    updateValue: string
  ) => {
    setPointsValues((prevState) => {
      const updatedState = { ...prevState, [inputName]: updateValue };
      const currentUsedPoints = calculateUsedPoints(updatedState);
      const hasPointsToUse = currentUsedPoints < parseInt(maxPoints);

      if (hasPointsToUse) {
        return updatedState;
      }
      return prevState;
    });
  };

  function calculateUsedPoints(pointsValues: typeof defaultPointsValues) {
    return Object.values(pointsValues).reduce((usedPoints, currentValue) => {
      const currentCost =
        defaultPointsCosts[currentValue as keyof typeof defaultPointsCosts];

      return currentCost + usedPoints;
    }, 0);
  }

  const resetButtonHandlerClick = () => {
    setPointsValues(defaultPointsValues);
    setMaxPoints(defaultMaxPoints);
  };

  type CountButtonHandleClickProps = (
    action: "increase" | "decrease",
    inputName: keyof typeof defaultPointsValues
  ) => void;

  const CountButtonHandleClick: CountButtonHandleClickProps = (
    action,
    inputName
  ) => {
    setPointsValues((prevState) => {
      const updatedState = { ...prevState };
      const prevValue = parseInt(prevState[inputName]);

      if (action === "increase") {
        const updatedCurrentPoints = prevValue + 1;

        updatedState[inputName] = updatedCurrentPoints.toString();

        const currentUsedPoints = calculateUsedPoints(updatedState);
        const hasPointsToUse = currentUsedPoints <= parseInt(maxPoints);

        if (!hasPointsToUse) {
          return prevState;
        }
      } else if (action === "decrease") {
        const updatedCurrentPoints = prevValue - 1;

        updatedState[inputName] = updatedCurrentPoints.toString();

        const currentUsedPoints = calculateUsedPoints(updatedState);
        const hasPointsToUse = currentUsedPoints >= parseInt(defaultMinPoints);

        if (!hasPointsToUse) {
          return prevState;
        }
      }

      return updatedState;
    });
  };

  return {
    pointsValues,
    usedPoints,
    maxPoints,
    calculateModificator,
    inputHandlerChange,
    setMaxPoints,
    resetButtonHandlerClick,
    CountButtonHandleClick,
  };
};
