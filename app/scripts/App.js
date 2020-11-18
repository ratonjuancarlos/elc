import React, { useState } from "react";
import {Menu, Home, Results} from "./components";

const App = (props) => {
  const [results, setResults] = useState([]);
  const doSearch = (e) => {
    if (e === undefined) {
      setResults([]);
    } else {
      e.preventDefault();
      fetch(`http://localhost:3035?search=${e.target.value}`)
        .then((response) => response.json())
        .then((data) => setResults(data));
    }
  };
  return (
    <div className="App">
      <Menu doSearch={doSearch} />
      {results.length > 0 && <Results results={results} />}
      <Home />
    </div>
  );
};

export default App;

/**
 * The Initial React Setup file
 * ...
 *
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 *
 * == JS
 * All files in here start from this init point for the React Components.
 *
 *
 * Firstly we need to import the React JS Library
 */
// import React from 'react';
// import ReactDOM from 'react-dom';

// import Menu from './components/menu';
// import Home from './components/home';
// import Results from './components/results';

/**
 * We can start our initial App here in the main.js file
 */
// class App extends React.Component {

//     /**
//      * Main constructor for the App Class
//      * @memberof App
//      */
//     constructor() {
//         super();
//         this.doSearch = this.doSearch.bind(this)
//         this.state = {
//             results: []
//         };
//     }

//     /**
//      * Makes the request and pass the results to home.js
//      * @memberof App
//      * @param value [String] - the string to search
//      */
//     doSearch(e) {
//         if(e===undefined){
//             this.setState({
//                 results:[]
//             })
//         }else{

//             e.preventDefault();
//             fetch(`http://localhost:3035?search=${e.target.value}`)
//             .then(response => response.json())
//             .then(data => this.setState({
//                 results:data
//             }));
//         }

//     }

//     /**
//      * Renders the default app in the window, we have assigned this to an element called root.
//      *
//      * @returns JSX
//      * @memberof App
//     */
//     render() {
//         return (
//             <div className="App">
//                 <Menu doSearch={this.doSearch}/>
//                 <Results results={this.state.results}/>
//                 <Home results={this.state.results}/>
//             </div>
//         );
//     }
// }

// export default App;
