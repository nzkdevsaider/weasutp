import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import HomeIcon from "@mui/icons-material/Home";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const changelogContent = "**No disponible de momento.**";
  return (
    <AppBar>
      <Toolbar>
        <IconButton color="inherit" component={Link} to="/" sx={{ mr: 3 }}>
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          WeasUTP
        </Typography>
        <Button color="inherit" onClick={handleOpen}>
          Changelog
        </Button>
        <Button color="inherit" component={Link} to="/acerca">
          Acerca de
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="changelog-title"
          aria-describedby="changelog-desc"
        >
          <Box sx={style}>
            <Typography id="changelog-title" variant="h6" component="h2">
              Notas de cambios de la versión
            </Typography>
            <Typography id="changelog-desc" sx={{ mt: 2 }}>
              <ReactMarkdown>{changelogContent}</ReactMarkdown>
            </Typography>
          </Box>
        </Modal>
      </Toolbar>
    </AppBar>
  );
}
