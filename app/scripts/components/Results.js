import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useRequestResults } from "../apiContext";

const cleanResults = (results) =>
  results.filter((r) => r.isActive === "true").slice(0, 4);

const Results = () => {
  const results = useRequestResults()
  const cleanedResults = cleanResults(results);
  return (
    <div id="results">
      <div className="results">
        {cleanedResults.length > 0 && (
          <>
            <div className="header">
              DISPLAYING 4 OF {cleanedResults.length} RESULTS{" "}
              <a href="#">SEE ALL RESULTS</a>
            </div>
            <div className="list">
              {cleanedResults.map((result) => (
                <div className="result" key={result._id}>
                  <span className="image">
                    <img src={`${result.picture}`} alt={result.name}/>
                  </span>
                  <span className="info">
                    <div className="name">{result.name}</div>
                    <div className="about">{result.about}</div>
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Results.propTypes = {
  results: PropTypes.array,
};

export default Results;
