import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";

import App from "./app/App";
import store from "./redux/store";
import registerServiceWorker from "./registerServiceWorker";

import "./assets/css/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);

registerServiceWorker();
