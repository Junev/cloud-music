import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./AppStyles";
import { IconStyle } from "./assets/iconfont/iconfont";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <IconStyle />
      <i className="iconfont icon-41"></i>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
