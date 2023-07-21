import { ThemeProvider } from "@emotion/react";
import { CssBaseline, Box } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { AppTheme } from "./general/theme";
import { TripPlanner } from "./app/TripPlanner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={AppTheme}>
      <Box sx={{marginTop:"10px"}}>
        <CssBaseline />
        <TripPlanner />
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);
