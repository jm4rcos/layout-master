import { EditorProvider } from "./contexts/EditorContext";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./themes/GlobalStyle"

function App() {
  return (
    <EditorProvider>
      <GlobalStyle />
      <Home />
    </EditorProvider>
  );
}

export default App;
