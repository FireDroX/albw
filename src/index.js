import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { RunProvider } from "./utils/RunContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <RunProvider>
        <App />
      </RunProvider>
    </Router>
  </React.StrictMode>
);
