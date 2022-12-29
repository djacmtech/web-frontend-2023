import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { reducers } from "./reducers";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Layout from "./components/Layout";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  </>
);
