import { Box, CircularProgress, Typography } from "@mui/material";

export const LoadingScreen = () => {
  return (
    <Box
      maxWidth="lg"
      margin="auto"
      sx={{ textAlign: "center", marginBlock: "50px" }}
    >
      <CircularProgress />
      <Typography>Contents are loading...</Typography>
    </Box>
  );
};
