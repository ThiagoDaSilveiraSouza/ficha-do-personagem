import styled, { CSSProperties } from "styled-components";

export const SpellsCardsContainer = styled.div`
  flex: 1 1 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 20px;
  padding-bottom: 20px;
`;

export const SpellNivelContainer = styled.div`
  width: 100%;
  flex: 1 1 100%;
  background: white;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 10px;
`;

export const SpellNivelDisplay = styled.div`
  flex: 1 1 320px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  transition: 0.3s;
  overflow: auto;
`;
export const NivelTitleContainer = styled.label`
  input {
    display: none;
  }
`;

type NivelTitleProps = {
  $isopen?: string;
};
export const NivelTitle = styled.h3<NivelTitleProps>`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  color: black;
  margin: 0;
  padding: 10px;

  svg {
    transform: ${({ $isopen }) => $isopen === "false" && "rotate(180deg)"};
    transition: 0.3s;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FiltersListContainer = styled.form`
  flex: 1 1 100%;
  margin-bottom: 30px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
  height: max-content;
  overflow: auto;
  max-height: 500px;
  padding: 0 10px;
  background: white;
  box-sizing: border-box;
  border-radius: 5px;
  transition: 0.3s height;
`;

export const FilterButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-self: flex-end;
`;

type FilterButtonProps = {
  $position?: CSSProperties["position"];
  $top?: CSSProperties["top"];
  $left?: CSSProperties["left"];
  $right?: CSSProperties["right"];
  $bottom?: CSSProperties["bottom"];
};

export const FilterButton = styled.button<FilterButtonProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  position: ${({ $position = "initial" }) => $position};
  top: ${({ $top = "initial" }) => $top};
  left: ${({ $left = "initial" }) => $left};
  right: ${({ $right = "initial" }) => $right};
  bottom: ${({ $bottom = "initial" }) => $bottom};
  margin-bottom: 10px;
  /* color: black; */
`;
export const FilterSubtitle = styled.h4`
  color: black;
`;

export const SearchInput = styled.input`
  max-width: 400px;
  padding: 8px 12px;
  margin-bottom: 16px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: border-color 0.2s;
  justify-self: center;

  &:focus {
    border-color: #007bff;
  }
`;

export const RadioGroupContainer = styled.div`
  flex: 0 1 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 12px;
  /* border: 1px solid #ccc; */
  border-radius: 8px;
  background: #fff;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); */
`;

export const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  cursor: pointer;

  input {
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid #007bff;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    outline: none;
    cursor: pointer;

    &:checked {
      background-color: #007bff;
      border-color: #0056b3;
    }

    &:focus {
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.4);
    }
  }

  span {
    color: #333;
  }
`;
export const CheckboxOption = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  cursor: pointer;

  input {
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid #007bff;
    border-radius: 4px; /* Quadrado ou com bordas levemente arredondadas */
    display: inline-block;
    position: relative;
    outline: none;
    cursor: pointer;

    &:checked {
      background-color: #007bff;
      border-color: #0056b3;
    }

    &:checked::after {
      content: "✓";
      color: white;
      font-size: 12px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &:focus {
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.4);
    }
  }

  span {
    color: #333;
    text-transform: capitalize;
  }
`;
