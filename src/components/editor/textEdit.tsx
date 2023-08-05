import { Box, Typography } from "@mui/material";
import {
  HeaderWrapperStyle,
  HeaderTextStyle,
  TextStyle,
} from "../../general/.styles";

interface TripContentTextProps {
  header: string;
  text: string;
}

const TripEditText = ({ header, text }: TripContentTextProps) => {
  return (
    <>
      <Box sx={HeaderWrapperStyle}>
        <Typography sx={HeaderTextStyle}>{header}</Typography>
      </Box>
      <Typography sx={TextStyle}>{text}</Typography>
    </>
  );
};

export default TripEditText;
