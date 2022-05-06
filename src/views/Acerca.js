import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";

export default function Acerca() {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={8}>
          <Typography variant="h3" component="div">
            Acerca de WeasUTP
          </Typography>
          <Typography variant="body1" component="div">
            ¡Hola! WeasUTP es un proyecto personal creado por mí,{" "}
            <b>Sebastián Morales</b> al principio con la intención de poder
            estudiar de una manera más entretenida y didáctica las matemáticas
            informáticas.
            <br />
            <br />
            Las herramientas disponibles en la página resuelven problemas
            especificos y simplifican el proceso de algoritmo de manera que
            puedes visualizar la respuesta directamente.
            <br />
            <br />
            <b>¡La página se encuentra en construcción!</b> la experiencia de usuario no es muy agradable por ahora
            y puede que te encuentres un par de errores o diseños sin terminar.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
