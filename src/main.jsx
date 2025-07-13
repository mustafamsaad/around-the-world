import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <div className="font-inter dark:text-gray-100">
    <App />
  </div>
);
