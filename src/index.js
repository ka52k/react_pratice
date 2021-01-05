import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// const App = () => {
//   return (
//     // <div>
//     //   <h1>こんにちは！</h1>
//     //   <p>お元気ですか</p>
//     // </div>

//     // <React.Fragment>    
//     //   <h1>こんにちは！</h1>
//     //   <p>お元気ですか</p>
//     // </React.Fragment>
    
//     <>
//       <h1>こんにちは！</h1>
//       <p>お元気ですか</p>
//     </>
//   );
// };

ReactDom.render(<App />, document.getElementById("root"));
