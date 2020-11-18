import React from "react";
import { Menu, Home, Results } from "./components";
import { RequestProvider } from "./apiContext";

const App = () => {
  return (
    <div className="App">
      <RequestProvider>
        <Menu />
        <Results />
      </RequestProvider>
      <Home />
    </div>
  );
};

export default App;
