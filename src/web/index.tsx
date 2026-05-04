import React from "react";
import ReactDOM from "react-dom/client";

const rootEl = document.getElementById("root");

if (!rootEl) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootEl);

root.render(
  <React.StrictMode>
    <h1>Hello Vite + React!</h1>
  </React.StrictMode>,
);
