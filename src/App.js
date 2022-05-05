import Navbar from "./comps/Navbar";
import theme from "./assets/theme";
import { ThemeProvider } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import ArreglosMulti from "./views/ArreglosMulti";
import Acerca from "./views/Acerca";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/arreglos/multidimensionales"
          element={<ArreglosMulti />}
        />
        <Route path="/acerca" element={<Acerca />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
