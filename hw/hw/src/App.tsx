import { useState } from "react";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
     
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Home Address
          </a>

          <button
            className="btn btn-outline-light ms-auto"
            type="button"
            onClick={() => setShow(!show)}
          >
            Show Slide
          </button>
        </div>
      </nav>

      
      <Box sx={{ p: 4 }}>
        <Slide direction="up" in={show} mountOnEnter unmountOnExit>
          <Paper
            elevation={4}
            sx={{
              p: 4,
              width: 350,
              textAlign: "center",
              borderRadius: 3,
              mx: "auto",
            }}
          >
            <h2>Hello 👋</h2>
            <p>This hidden content uses Material UI Slide.</p>

            <Button variant="outlined" onClick={() => setShow(false)}>
              Close
            </Button>
          </Paper>
        </Slide>
      </Box>
    </>
  );
}

export default App;