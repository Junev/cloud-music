import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./AppStyles";
import { IconStyle } from "./assets/iconfont/iconfont";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <IconStyle />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
