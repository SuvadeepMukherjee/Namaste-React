import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

const AnotherComponent = function () {
  return <h2> This is Another Component</h2>;
};

const Header = () => {
  return (
    <div className="Title" key="title">
      <h1 style={{ color: "blue" }} key="h1">
        This is h1 tag
      </h1>
      <h2 style={{ color: "palevioletred" }} key="h2">
        This is h2 tag
      </h2>
      <AnotherComponent />
      <h3 style={{ color: "green" }} key="h3">
        This is h3 tag
      </h3>
    </div>
  );
};

root.render(<Header />);
