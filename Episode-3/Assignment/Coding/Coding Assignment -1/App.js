import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
const header = React.createElement(
  "div",
  {
    className: "Title",
    key: "title",
  },
  [
    React.createElement(
      "h1",
      {
        key: "h1",
      },
      "This is h1 Tag"
    ),
    React.createElement(
      "h2",
      {
        key: "h2",
      },
      "This is h2 Tag"
    ),
    React.createElement(
      "h3",
      {
        key: "h3",
      },
      "This is h3 Tag"
    ),
  ]
);

root.render(header);
