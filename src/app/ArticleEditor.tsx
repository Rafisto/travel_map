import { Box, Grid, Typography } from "@mui/material";
import { TripContents } from "../general/.interfaces";
import { ListContents } from "../components/editor/listContents";
import { Article } from "./Article";
import { JSONEditor } from "../components/editor/jsonEditor";
import { useState } from "react";
import { EmptyArticle } from "../general/defaults";

const HeaderTypographyStyle = {
  marginBottom: "30px",
  paddingBottom: "5px",
  textAlign: "center",
  fontSize: "20pt",
  fontWeight: "bold",
  borderBottom: "1px solid #202020",
};

export const ArticleEditor = () => {
  const [editArticle, setArticle] = useState<TripContents>(EmptyArticle);

  const UpdateJSON = (json: TripContents) => {
    setArticle(json);
  };

  return (
    <Box sx={{ margin: "20px" }}>
      <Grid container spacing={3}>
        {editArticle && (
          <>
            <Grid item xs={2}>
              <Typography sx={HeaderTypographyStyle}>Contents</Typography>

              <ListContents trip={editArticle} />
            </Grid>
            <Grid item xs={4}>
              <Typography sx={HeaderTypographyStyle}>Editor</Typography>
              <JSONEditor contents={editArticle} update={UpdateJSON} />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={HeaderTypographyStyle}>Preview</Typography>
              <Article contents={editArticle} />
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};
