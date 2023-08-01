import React from "react";
import "./App.css";
import Router from "./shared/Router";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
};

export default App;
