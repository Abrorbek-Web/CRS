import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./styles/index.css";
import App from "./App";
import store from "./store";
import "./constants/i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
