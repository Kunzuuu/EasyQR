import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import Wifi from "./pages/Wifi";
import URL_code from "./pages/URL";
import "./styles.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route component={Wifi} exact path="/" />
        <Route component={URL_code} exact path="*" />
      </Switch>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
