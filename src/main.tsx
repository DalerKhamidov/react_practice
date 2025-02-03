import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "app/app";
import { ThemeProvider } from "components/context/theme-context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
