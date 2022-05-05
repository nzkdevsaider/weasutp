import React from "react";
import { Chip, Container, Grid, Stack, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function ArreglosMulti() {
  const [locMode, setLocMode] = React.useState(1);
  const [limInfA, setLimInfA] = React.useState(0);
  const [limSupA, setLimSupA] = React.useState(0);
  const [limInfB, setLimInfB] = React.useState(0);
  const [limSupB, setLimSupB] = React.useState(0);
  const [limInfC, setLimInfC] = React.useState(0);
  const [limSupC, setLimSupC] = React.useState(0);
  const [compA, setCompA] = React.useState(0);
  const [compB, setCompB] = React.useState(0);
  const [compC, setCompC] = React.useState(0);
  const [dirBase, setDirBase] = React.useState(1000);
  const [wbyte, setWByte] = React.useState(4);

  /* Change Events */
  const locChange = (event) => {
    setLocMode(event.target.value);
  };

  const limInfAChange = (event) => {
    setLimInfA(event.target.value);
  };
  const limInfBChange = (event) => {
    setLimInfB(event.target.value);
  };
  const limInfCChange = (event) => {
    setLimInfC(event.target.value);
  };
  const limSupAChange = (event) => {
    setLimSupA(event.target.value);
  };
  const limSupBChange = (event) => {
    setLimSupB(event.target.value);
  };
  const limSupCChange = (event) => {
    setLimSupC(event.target.value);
  };

  const compAChange = (event) => {
    setCompA(event.target.value);
  };

  const compBChange = (event) => {
    setCompB(event.target.value);
  };

  const compCChange = (event) => {
    setCompC(event.target.value);
  };

  const dirBaseChange = (event) => {
    setDirBase(event.target.value);
  };

  const wbyteChange = (event) => {
    setWByte(event.target.value);
  };

  /* Localizaciones */
  const E1 = compA - limInfA;
  const E2 = compB - limInfB;
  const E3 = compC - limInfC;
  const L1 = limSupA - limInfA + 1;
  const L2 = limSupB - limInfB + 1;
  const L3 = limSupC - limInfC + 1;
  const NTC = L1 * L2 * L3;

  const fila = (E3 * L2 + E2) * L1 + E1;
  const columna = (E1 * L2 + E2) * L3 + E3;

  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={{ md: 5 }}
        direction="column"
        justifyContent="center"
        style={{ minHeight: "160vh" }}
      >
        <Grid item xs={8}>
          <Typography variant="h3" component="div">
            Arreglos multidimensionales
          </Typography>
          <Chip icon={<AutoAwesomeIcon />} label="Beta" />
          <Typography variant="body1" component="div">
            Herramienta para encontrar la localización de un elemento de un arreglo
            multidimensional (3 dimensiones) determinado.
          </Typography>
          <Typography variant="h6" component="div">
            L1 = {L1} | L2 = {L2} | L3 = {L3}
          </Typography>
          <Typography variant="h6" component="div">
            E1 = {E1} | E2 = {E2} | E3 = {E3}
          </Typography>
          <Typography variant="h6" component="div">
            NTC = {NTC}
          </Typography>
          <Typography variant="h6" component="div">
            {locMode === "2" && (
              <>
                <b>Fila</b>
                <br />
                LOC(A[{compA},{compB},{compC}]) = {dirBase} + {wbyte} [({E1} *{" "}
                {L2} + {E2}) * {L3} + {E3}]<br /> = {dirBase} + {wbyte} [
                {columna}]<br /> = {dirBase} + {wbyte * columna}
                <br /> = {dirBase + wbyte * columna}
              </>
            )}

            {locMode === "1" && (
              <>
                <b>Columna</b>
                <br />
                LOC(A[{compA},{compB},{compC}]) = {dirBase} + {wbyte} [({E3} *{" "}
                {L2} + {E2}) * {L1} + {E1}]<br /> = {dirBase} + {wbyte} [{fila}]
                <br /> = {dirBase} + {wbyte * fila}
                <br /> = {dirBase + wbyte * fila}
              </>
            )}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel id="propiedades">
              Propiedades globales del arreglo
            </FormLabel>
            <br />
            <Stack direction="row">
              <TextField
                id="limInfA"
                label="LimInfA"
                type="number"
                value={limInfA}
                focused
                onChange={limInfAChange}
              />
              <TextField
                id="limSupA"
                label="LimSupA"
                type="number"
                value={limSupA}
                focused
                onChange={limSupAChange}
              />
              <TextField
                id="limInfB"
                label="LimInfB"
                type="number"
                value={limInfB}
                focused
                onChange={limInfBChange}
              />
              <TextField
                id="limSupB"
                label="LimSupB"
                type="number"
                value={limSupB}
                focused
                onChange={limSupBChange}
              />
              <TextField
                id="limInfC"
                label="LimInfC"
                type="number"
                value={limInfC}
                focused
                onChange={limInfCChange}
              />
              <TextField
                id="limSupC"
                label="LimSupC"
                type="number"
                value={limSupC}
                focused
                onChange={limSupCChange}
              />
            </Stack>
            <br />
            <Stack direction="row">
              <TextField
                id="dirBase"
                label="dirBase"
                type="number"
                value={dirBase}
                focused
                onChange={dirBaseChange}
              />
              <TextField
                id="wbyte"
                label="w"
                type="number"
                value={wbyte}
                focused
                onChange={wbyteChange}
              />
            </Stack>
            <br />
            <FormLabel id="componente">Componente del arreglo</FormLabel>
            <br />
            <Stack direction="row">
              <TextField
                id="compA"
                label="compA (K₁)"
                type="number"
                value={compA}
                focused
                onChange={compAChange}
              />
              <TextField
                id="compB"
                label="compB (K₂)"
                type="number"
                value={compB}
                focused
                onChange={compBChange}
              />
              <TextField
                id="compC"
                label="compC (K₃)"
                type="number"
                value={compC}
                focused
                onChange={compCChange}
              />
            </Stack>
            <br />
            <FormLabel id="localizacion">Modo de localización</FormLabel>
            <RadioGroup
              aria-labelledby="localizacion"
              name="localización"
              value={locMode}
              onChange={locChange}
            >
              <FormControlLabel
                value={1}
                control={<Radio />}
                label="Columnas"
              />
              <FormControlLabel value={2} control={<Radio />} label="Filas" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
}
