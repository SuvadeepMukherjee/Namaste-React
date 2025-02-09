import React from "react";
import ReactDOM from "react-dom/client";
//import Header from "./Header.js";
import "./Header.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">MyLogo</div>

      {/* Search Bar */}
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <span className="search-icon">&#128269;</span>
      </div>

      {/* User Icon */}
      <div className="user-icon">&#128100;</div>
    </header>
  );
};
root.render(<Header />);
