import { Container, Divider } from "@mui/material";
import { CenteredWrapperStyle } from "./.styles";

export const Footer = () => {
  return (
    <>
      <Container sx={CenteredWrapperStyle}>
        <Divider sx={{marginBottom:"20px"}}/>
        Rafał Włodarczyk 2023 © All Rights Reserved<br/>
        rafal.piotr.wlodarczyk@gmail.com<br/><br/>
        Iter vestrum sit tutum et fortunatum
      </Container>
    </>
  );
};
