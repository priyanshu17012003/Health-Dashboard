import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PatientsProvider } from "./provider/PatientsProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PatientsProvider>
      <App />
    </PatientsProvider>
  </StrictMode>
);
