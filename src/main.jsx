import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import Layout from "./components/Layout";
import { reducers } from "./reducers";
import "./styles/main.css";
import { theme } from "./theme";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  </>
);
