import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

const header = (
  <div>
    <h1>This is h1 Tag</h1>
    <h2>This is h2 Tag</h2>
    <h3>This is h3 Tag</h3>
  </div>
);

const Header = () => {
  return (
    <div>
      <h1>This is h1 Tag</h1>
      <h2>This is h2 Tag</h2>
      <h3> This is h3 Tag</h3>
    </div>
  );
};

root.render(<Header />);
