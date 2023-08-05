import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { TripContents } from "../../general/.interfaces";

export const ListContents = ({ trip }: { trip: TripContents }) => {
  return (
    <Box>
      <Typography sx={{ display: "flex" }}>
        <span style={{ flexGrow: "1" }}>Title:</span>
        <span>{trip.title}</span>
      </Typography>
      <Typography sx={{ display: "flex" }}>
        <span style={{ flexGrow: "1" }}>Date:</span>
        <span>{trip.date}</span>
      </Typography>
      <Divider sx={{ marginBlock: "10px" }} />
      <Typography>Contents:</Typography>
      <List>
        {trip.contents.map((content, i) => {
          return (
            <ListItemButton key={`${i}.${content.type}`}>
              <ListItemText primary={content.type} />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};
