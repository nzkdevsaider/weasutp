import React from "react";
import Navbar from "./comps/Navbar";
import lightTheme from "./assets/theme";
import darkTheme from "./assets/darktheme";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import ArreglosMulti from "./views/ArreglosMulti";
import ArreglosBi from "./views/ArreglosBi";
import ArreglosUni from "./views/ArreglosUni";
import Acerca from "./views/Acerca";
import { Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CssBaseline from '@mui/material/CssBaseline';
import CalculadoraNotaFinal from "./views/CalculadoraNotaFinal";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function ToggleButton() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={colorMode.toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}

function App() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = mode === "light" ? lightTheme : darkTheme;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Navbar />
        <Box mt={10} />
        <ToggleButton />
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
              <Route
                path="/arreglos/bidimensionales"
                element={<ArreglosBi />}
              />
              <Route
                path="/arreglos/unidimensionales"
                element={<ArreglosUni />}
              />
              <Route
                path="/calculadoras/nota-final"
                element={<CalculadoraNotaFinal />}
              />
              <Route path="/acerca" element={<Acerca />} />
            </Routes>
          </Grid>
        </Grid>
        <Box mt={10} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
