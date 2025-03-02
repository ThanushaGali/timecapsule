import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Make sure this file exists
import App from "./App.jsx"; // Ensure it matches the new filename


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
