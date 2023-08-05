import { useRef, useState } from "react";
import { TripContent, TripContents } from "../../general/.interfaces";
import {
  Box,
  Divider,
  FormControlLabel,
  IconButton,
  Switch,
  TextField,
} from "@mui/material";
import {
  AddLocationAlt,
  AddPhotoAlternate,
  ContentCopy,
  RestartAlt,
  TextIncrease,
} from "@mui/icons-material";
import { ResetDialog } from "./resetDialog";
import { EmptyImage, EmptyMap, EmptyText } from "../../general/defaults";

const JSONEditorStyle = {
  width: "100%",
};

const EditorWrapperStyle = {
  display: "flex",
  marginBottom: "10px",
};

type JSONEditorProps = {
  contents: TripContents;
  update: (json: TripContents) => void;
};

export const JSONEditor = ({ contents: json, update }: JSONEditorProps) => {
  const [editable, setEditable] = useState(false);
  const editForm = useRef<HTMLInputElement>(null);

  const [resetDialogOpen, setResetDialogOpen] = useState(false);
  const ResetArticle = () => {
    update({ ...json, contents: [] });
    setEditable(false);
  };

  const CopyArticle = () => {
    navigator.clipboard.writeText(JSON.stringify(json, null, 2));
  };

  const AddElement = (type: string) => {
    let newElement = {};
    switch (type) {
      case "text":
        newElement = EmptyText;
        break;
      case "image":
        newElement = EmptyImage;
        break;
      case "map":
        newElement = EmptyMap;
        break;
    }
    update({
      ...json,
      contents: [...json.contents, newElement as TripContent],
    });
  };

  return (
    <>
      <Box sx={EditorWrapperStyle}>
        <IconButton
          onClick={() => {
            AddElement("text");
          }}
        >
          <TextIncrease />
        </IconButton>
        <IconButton
          onClick={() => {
            AddElement("image");
          }}
        >
          <AddPhotoAlternate />
        </IconButton>
        <IconButton
          onClick={() => {
            AddElement("map");
          }}
        >
          <AddLocationAlt />
        </IconButton>
        <div style={{ flexGrow: "1" }} />
        <FormControlLabel
          control={
            <Switch
              checked={editable}
              onChange={(e) => setEditable(e.currentTarget.checked)}
            />
          }
          label="JSON"
        />
        <IconButton onClick={() => CopyArticle()}>
          <ContentCopy />
        </IconButton>
        <IconButton onClick={() => setResetDialogOpen(true)}>
          <RestartAlt />
        </IconButton>
        <ResetDialog
          open={resetDialogOpen}
          handleClose={() => setResetDialogOpen(false)}
          reset={ResetArticle}
        />
      </Box>
      <Divider sx={{ marginBlock: "15px" }} />
      {editable && (
        <TextField
          ref={editForm}
          sx={JSONEditorStyle}
          onChange={(e) => update(JSON.parse(e.target.value))}
          value={JSON.stringify(json, null, 2)}
          spellCheck={false}
          disabled={!editable}
          multiline
        />
      )}
    </>
  );
};
