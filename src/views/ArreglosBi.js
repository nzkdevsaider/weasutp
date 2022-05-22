import React from "react";
import { Button, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export default function ArreglosBi() {
  const [locMode, setLocMode] = React.useState("1");
  const [limInfA, setLimInfA] = React.useState(0);
  const [limSupA, setLimSupA] = React.useState(0);
  const [limInfB, setLimInfB] = React.useState(0);
  const [limSupB, setLimSupB] = React.useState(0);
  const [compA, setCompA] = React.useState(0);
  const [compB, setCompB] = React.useState(0);
  const [dirBase, setDirBase] = React.useState(2000);
  const [wbyte, setWByte] = React.useState(2);

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
  const limSupAChange = (event) => {
    setLimSupA(event.target.value);
  };
  const limSupBChange = (event) => {
    setLimSupB(event.target.value);
  };

  const compAChange = (event) => {
    setCompA(event.target.value);
  };

  const compBChange = (event) => {
    setCompB(event.target.value);
  };

  const dirBaseChange = (event) => {
    setDirBase(event.target.value);
  };

  const wbyteChange = (event) => {
    setWByte(event.target.value);
  };

  /* Localizaciones */
  const L1 = limSupA - limInfA + 1;
  const L2 = limSupB - limInfB + 1;
  const NTC = (limSupA - limInfB + 1) * (limSupB - limInfB + 1);

  const fila = L2 * (compA - limInfB) + (compB - limInfA);
  const columna = L1 * (compB - limInfB) + (compA - limInfA);

  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={{ md: 5 }}
        direction="column"
        justifyContent="center"
      >
        <Grid item xs={8}>
          <Typography variant="h3" component="div">
            Arreglos bidimensionales
          </Typography>
          <Chip icon={<AutoAwesomeIcon />} label="Arreglos" />
          <Typography variant="body1" component="div">
            Herramienta para encontrar la localización de un elemento de un
            arreglo bidimensional (2 dimensiones) determinado.
          </Typography>
          <Button href={process.env.PUBLIC_URL + '/docs/arreglos/estruccomp_p4.pdf'} target="_blank" variant="outlined" startIcon={<PictureAsPdfIcon />}>
            Leer teoría
          </Button>
          <Typography variant="h6" component="div">
            L1 = {L1} | L2 = {L2}
          </Typography>
          <Typography variant="h6" component="div">
            NTC = {L1}ᵐ * {L2}ⁿ = {NTC}
          </Typography>
          <Typography variant="h6" component="div">
            {locMode === "1" && (
              <>
                <b>Columna</b>
                <br />
                LOC(A[{compA},{compB}]) = {dirBase} + {wbyte} [{L2} * ({compA} -{" "}
                {limInfB}) + ({compB} - {limInfA})]
                <br /> = {dirBase} + {wbyte} [{columna}]<br /> = {dirBase} +{" "}
                {wbyte * columna}
                <br /> = {parseInt(dirBase) + wbyte * columna}
              </>
            )}

            {locMode === "2" && (
              <>
                <b>Fila</b>
                <br />
                LOC(A[{compA},{compB}]) = {dirBase} + {wbyte} [{L1} * ({compB} -{" "}
                {limInfB}) + ({compA} - {limInfA})]
                <br /> = {dirBase} + {wbyte} [{fila}]
                <br /> = {dirBase} + {wbyte * fila}
                <br /> = {parseInt(dirBase) + wbyte * fila}
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
