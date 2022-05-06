import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  const { version } = require("../../package.json");

  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={{ md: 5 }}
        direction="column"
        justifyContent="center"
      >
        <Grid item xs={8}>
          <Typography variant="h3" component="h3">
            ¡Bienvenido/a a WeasUTP!
          </Typography>
          <Typography variant="subtitle1" component="span">
            v{version}
          </Typography>
          <Typography variant="body1" component="p">
            Página web de utilidades especializada en agilizar tareas para
            hacerlas más simples. ¡Puedes saber más acerca de la página en{" "}
            <Link to="/acerca">esta página</Link>!
          </Typography>
          <Typography variant="body1" component="p">
            <br/>
            Utilidades disponibles:
            <br />
            <Link to="/arreglos/unidimensionales">
              Arreglos unidimensionales
            </Link>
            <br />
            <Link to="/arreglos/bidimensionales">Arreglos bidimensionales</Link>
            <br />
            <Link to="/arreglos/multidimensionales">
              Arreglos multidimensionales
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
