/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React from "react";

class Results extends React.Component {
  /**
   * Main constructor for the App Class
   * @memberof Results
   */
  constructor() {
    super();
  }
  /**
   * Renders the default app ins the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof Results
   */
  render() {
    if (this.props.results.length < 1) {
      return null;
    }
    const results = this.props.results.slice(0, 4);
console.log(results)
    return (
      <div id="results">
        <div className="results">
          <div className="header">
            DISPLAYING 4 OF {this.props.results.length} RESULTS <a href="#">SEE ALL RESULTS</a>
          </div>
          <div className="list">
          {results.map((result) => (
              <div className="result" key={result._id}>
                <span className="image">
                    <img src={`${result.picture}`} />
                </span>
                <span className="info">
                    <div  className="name">{result.name}</div>
                    <div  className="about">{result.about}</div>
                </span>
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  }
}

// Export out the React Component
module.exports = Results;
