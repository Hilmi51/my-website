import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from 'next-themes'
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider attribute="class">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
