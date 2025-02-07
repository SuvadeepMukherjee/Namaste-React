{
  /* <div id="parent">
  <div id="child">
    <h1>i am a h1 tag</h1>
    <h2>i am a h2 tag</h2>
  </div>
</div>; */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ])
);
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React!"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
