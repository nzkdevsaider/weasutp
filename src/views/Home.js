import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "90vh" }}
      >
        <Grid item xs={8}>
          <Typography variant="h3" component="div">
            ¡Bienvenido/a a WeasUTP b1.0!
          </Typography>
          <Typography variant="body1" component="div">
            Página web de utilidades especializada en agilizar tareas para
            hacerlas más simples. ¡Puedes saber más acerca de la página en{" "}
            <Link to="/acerca">esta página</Link>!
          </Typography>
          <Typography variant="body1" component="div">
            Utilidades disponibles: <br />-{" "}
            <Link to="/arreglos/multidimensionales">
              Arreglos multidimensionales
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
