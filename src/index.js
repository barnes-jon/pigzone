//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <Header />
    <App />
    <Footer />
  </>
);
