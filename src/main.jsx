import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { HabiApp } from "./HabiApp";
import { store } from "./store/store";
import  "./styles/styles.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HabiApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
