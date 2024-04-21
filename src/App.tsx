import AppRoutes from "./routes";
import { Theme } from "./styles/Theme";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <AppRoutes />
        <GlobalStyle />
      </Theme>
    </BrowserRouter>
  );
}

export default App;
