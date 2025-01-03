import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderElement = styled.header`
  display: flex;
  justify-content: start;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px 0;
  width: 100%;
`;

export const Header = () => {
  return (
    <HeaderElement>
      <Link to="/">
        <button>Lista de magias</button>
      </Link>
      <Link to="calculadora-de-pontos">
        <button>Calculadora de Pontos</button>
      </Link>
    </HeaderElement>
  );
};
