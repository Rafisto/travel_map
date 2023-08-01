import { Box, Grid, Typography } from "@mui/material";
import { HeaderWrapperStyle, HeaderTextStyle, TextStyle } from "./text";

type TripContentImageTextProps = {
  header: string;
  text: string;
  image: string;
  caption: string;
};

const GridImageContainerStyle = {
  marginTop: "20px",
};

const TextCaptionStyle = {
    textAlign: "center",
    fontStyle:"italic",
}

export const TripContentImageText = ({
  header,
  text,
  image,
  caption,
}: TripContentImageTextProps) => {
  return (
    <>
      <Grid container sx={GridImageContainerStyle} spacing={1}>
        <Grid item md={4} xs={12}>
          <img src={image} width="100%" />
          <Typography sx={TextCaptionStyle}>{caption}</Typography>
        </Grid>
        <Grid item md={8} xs={12}>
          <Box sx={{...HeaderWrapperStyle, marginTop:"0"}}>
            <Typography sx={HeaderTextStyle}>{header}</Typography>
          </Box>
          <Typography sx={TextStyle}>{text}</Typography>
        </Grid>
      </Grid>
    </>
  );
};
