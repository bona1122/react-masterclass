import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { RecoilRoot } from "recoil";
import { darkTheme } from "./theme.ts";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <RecoilRoot>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </RecoilRoot>
  // </React.StrictMode>
);
