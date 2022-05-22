import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export default function CalculadoraNotaFinal() {
    const califObj = {};
    const meCalif = Object.create(califObj);
    
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
            Calculadora nota final
          </Typography>
          <Typography variant="body1" component="p">
            Herramienta para calcular tu nota final en una asignatura.
          </Typography>
          <Button
            href={process.env.PUBLIC_URL + "/docs/calculadoras/notafinal.pdf"}
            target="_blank"
            variant="outlined"
            startIcon={<PictureAsPdfIcon />}
          >
            Leer teoría
          </Button>
        </Grid>
        <Grid item xs={8}>
            <i>Esta herramienta está en desarrollo.</i>
        </Grid>
      </Grid>
    </Container>
  );
}
