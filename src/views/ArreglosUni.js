import React from "react";
import {
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export default function ArreglosUni() {
  const [limInfA, setLimInfA] = React.useState(0);
  const [limSupA, setLimSupA] = React.useState(0);

  const [compA, setCompA] = React.useState(0);

  const [dirBase, setDirBase] = React.useState(2300);
  const [wbyte, setWByte] = React.useState(2);

  /* Change Events */
  
  const limInfAChange = (event) => {
    setLimInfA(event.target.value);
  };
  const limSupAChange = (event) => {
    setLimSupA(event.target.value);
  };

  const compAChange = (event) => {
    setCompA(event.target.value);
  };

  const dirBaseChange = (event) => {
    setDirBase(event.target.value);
  };

  const wbyteChange = (event) => {
    setWByte(event.target.value);
  };

  /* Localizaciones */
  const L = limSupA;
  const NTC = limSupA - limInfA + 1;
  const OP = wbyte * (compA - limInfA);
  const result = parseInt(dirBase) + OP;

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
            Arreglos unidimensionales
          </Typography>
          <Chip icon={<AutoAwesomeIcon />} label="Arreglos" />
          <Typography variant="body1" component="div">
            Herramienta para encontrar la localización de un elemento de un
            arreglo unidimensional (1 dimensión) determinado.
          </Typography>
          <Button
            href={process.env.PUBLIC_URL + "/docs/arreglos/estruccomp_p3.pdf"}
            target="_blank"
            variant="outlined"
            startIcon={<PictureAsPdfIcon />}
          >
            Leer teoría
          </Button>
          <Typography variant="h6" component="div">
            Longitud = {L}
          </Typography>
          <Typography variant="h6" component="div">
            NTC = {limSupA} - {limInfA} + 1 = {NTC} elementos
          </Typography>
          <Typography variant="h6" component="div">
            <br />
            LOC(A[{compA}]) = {dirBase} + {wbyte} ({compA} - {limInfA})
            <br /> = {dirBase} + {wbyte} ({compA - limInfA})<br /> = {dirBase} +{" "}
            {OP}
            <br /> = {result}
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
                label="compA (K)"
                type="number"
                value={compA}
                focused
                onChange={compAChange}
              />
            </Stack>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
}
