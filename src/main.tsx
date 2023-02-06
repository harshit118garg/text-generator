import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { Provider } from "./service/contextAPI";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider>
    <App />
  </Provider>
);
