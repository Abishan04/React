import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Abishan from "./Abishan.jsx";
import App from "./App.jsx";
import Counter from "./components/state/Counter.jsx";
import Colorpicker from "./components/state/Colorpicker.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
<Colorpicker/>
  </StrictMode>
);
