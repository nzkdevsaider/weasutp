import Navbar from "./comps/Navbar";
import theme from "./assets/theme";
import { ThemeProvider } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import ArreglosMulti from "./views/ArreglosMulti";
import ArreglosBi from "./views/ArreglosBi";
import Acerca from "./views/Acerca";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box mt={10}/>
      <Grid
        container
        spacing={{ md: 5 }}
        direction="column"
        justifyContent="center"
        style={{ minHeight: "50vh" }}
      >
        <Grid item xs={8}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/arreglos/multidimensionales"
              element={<ArreglosMulti />}
            />
            <Route path="/arreglos/bidimensionales" element={<ArreglosBi />} />
            <Route path="/acerca" element={<Acerca />} />
          </Routes>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
