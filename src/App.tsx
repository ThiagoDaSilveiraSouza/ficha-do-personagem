import "./App.css";
import { MainRoute } from "./routes";
import { ModalsContainer } from "./components/ModalsContainer";
import { ModalsContextProvider, SelectedDataContextProvider } from "./context";

function App() {
  return (
    <ModalsContextProvider>
      <SelectedDataContextProvider>
        <MainRoute />
        <ModalsContainer />
      </SelectedDataContextProvider>
    </ModalsContextProvider>
  );
}

export default App;
