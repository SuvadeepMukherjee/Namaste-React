import React from "react";
import ReactDOM from "react-dom/client";

//JSX (transpiled before it reaches the JS Engine) transpiling done by parcel(babel)
const title = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

const number = 10000;
//React Functional Component
const HeadingComponent = () => (
  <div id="container">
    <h2>{number}</h2>
    <h1>Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
