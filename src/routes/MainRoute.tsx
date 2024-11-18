import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PointsCounterPage, SpellsListPage } from "../pages";
import { Header } from "../components";

export const MainRoute = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SpellsListPage />} />
        <Route path="/calculadora-de-pontos" element={<PointsCounterPage />} />
      </Routes>
    </Router>
  );
};
