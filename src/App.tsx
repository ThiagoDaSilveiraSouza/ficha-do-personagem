import "./App.css";
import { MainRoute } from "./routes";
import { ModalsContainer } from "./components/ModalsContainer";
import { ModalsContextProvider } from "./context";

function App() {
  return (
    <ModalsContextProvider>
      <MainRoute />
      <ModalsContainer />
    </ModalsContextProvider>
  );
}

export default App;
