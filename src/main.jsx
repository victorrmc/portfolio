import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <section className="min-h-screen w-full bg-gradient-to-r from-gray-900 to-slate-800">
      <App />
    </section>
  </React.StrictMode>
);
