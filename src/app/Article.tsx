import { Box } from "@mui/material";
import TripTitle from "../components/TripTitle";
import TripContentMap from "../components/content/map";
import TripContentText from "../components/content/text";
import { TripContent, TripContents } from "../general/.interfaces";
import { TripContentImageText } from "../components/content/imageText";

export const Article = ({ contents }: { contents: TripContents }) => {
  return (
    <Box maxWidth="lg" margin="auto">
      <TripTitle title={contents.title} date={contents.date} />
      <Box maxWidth="md" margin="auto">
        {contents.contents.map((content: TripContent, i) => {
          switch (content.type) {
            case "text":
              return (
                <TripContentText
                  key={`${content.type}-${i}`}
                  header={content.obj.header as string}
                  text={content.obj.text as string}
                />
              );
            case "map":
              return (
                <TripContentMap
                  key={`${content.type}-${i}`}
                  obj={
                    content.obj as {
                      settings: {
                        [key: string]: string;
                      };
                      points: {
                        [key: string]: string;
                      }[];
                    }
                  }
                />
              );
            case "image":
              return (
                <TripContentImageText
                  key={`${content.type}-${i}`}
                  header={content.obj.header as string}
                  text={content.obj.text as string}
                  image={content.obj.image as string}
                  caption={content.obj.caption as string}
                />
              );
          }
        })}
      </Box>
    </Box>
  );
};
