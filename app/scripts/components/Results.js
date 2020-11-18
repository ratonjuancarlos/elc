import React from "react";
import PropTypes from "prop-types";

const Results = ({ results }) => {
  const slicedResults = results.slice(0, 4);
  return (
    <div id="results">
      <div className="results">
        <div className="header">
          DISPLAYING 4 OF {results.length} RESULTS           <a href="#">SEE ALL RESULTS</a>
        </div>
        <div className="list">
          {slicedResults.map((result) => (
            <div className="result" key={result._id}>
              <span className="image">
                <img src={`${result.picture}`} />
              </span>
              <span className="info">
                <div className="name">{result.name}</div>
                <div className="about">{result.about}</div>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Results.propTypes = {
  results: PropTypes.array
};

export default Results;
