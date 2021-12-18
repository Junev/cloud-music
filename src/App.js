import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./AppStyles";
import { IconStyle } from "./assets/iconfont/iconfont";
import store from "./store";
import AppRoutes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <IconStyle />
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
