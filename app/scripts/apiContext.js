import React, { useState } from "react";
import { doSearch } from "./api";

const RequestStateContext = React.createContext([]);
const RequestSetContext = React.createContext();

function RequestProvider({ children }) {
  const [results, setResults] = useState([]);
  const getResults = doSearch(setResults)

  return (
    <RequestStateContext.Provider value={results}>
      <RequestSetContext.Provider value={getResults}>
        {children}
      </RequestSetContext.Provider>
    </RequestStateContext.Provider>
  );
}
function useRequestResults() {
  const context = React.useContext(RequestStateContext);
  if (context === undefined) {
    throw new Error("useRequestResults must be used within a RequestProvider");
  }
  return context;
}
function useRequest() {
  const context = React.useContext(RequestSetContext);
  if (context === undefined) {
    throw new Error("useRequest must be used within a RequestProvider");
  }
  return context;
}
export { RequestProvider, useRequestResults, useRequest };
