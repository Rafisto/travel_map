import { Container, Divider } from "@mui/material";

const FooterWrapperStyle = {
  marginBlock: "50px",
  textAlign: "center",
};

export const Footer = () => {
  return (
    <>
      <Container sx={FooterWrapperStyle}>
        <Divider sx={{marginBottom:"20px"}}/>
        Rafał Włodarczyk 2023 © All Rights Reserved<br/>
        rafal.piotr.wlodarczyk@gmail.com<br/><br/>
        Iter vestrum sit tutum et fortunatum
      </Container>
    </>
  );
};
