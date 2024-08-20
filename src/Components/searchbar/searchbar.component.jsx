import React from "react";
import "./searchbar.style.css";

export const Searchbar = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
