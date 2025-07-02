import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n"; // Import the i18n configuration
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <section className="min-h-screen w-full bg-gradient-to-r from-gray-900 to-slate-800">
        <App />
      </section>
    </I18nextProvider>
  </React.StrictMode>
);
