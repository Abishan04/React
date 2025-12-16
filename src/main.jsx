import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Abishan from "./Abishan.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Abishan fname="Abishan" lname="Jeyarajah" id="1" />
    <Abishan fname="Thubeerna" lname="Jeyarajah" id="2" />
    <Abishan fname="Mahilini" lname="Jeyarajah" id="3" />
  </StrictMode>
);
