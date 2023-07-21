import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import TripTitle from "../components/TripTitle";
import TripContentText from "../components/content/text";
import TripContentMap from "../components/content/map";

interface TripContents {
  title: string;
  date: string;
  contents: {
    type: string;
    obj: {
      [key: string]: any;
    };
    [key: string]: any;
  }[];
}

interface TripContent {
  type: string;
  obj: { [key: string]: any };
  [key: string]: any;
}

export const TripPlanner = () => {
  const [contents, setContents] = useState<TripContents>();

  useEffect(() => {
    const LoadTripContent = () => {
      void fetch("/trip.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setupData(data as TripContents));
    };
    LoadTripContent();
  }, []);

  const setupData = (data: TripContents) => {
    setContents(data);
    console.log(data);
  };

  if (contents) {
    return (
      <>
        <Box maxWidth="lg" margin="auto">
          <TripTitle title={contents.title} date={contents.date} />
          <Box maxWidth="md" margin="auto">
            {contents.contents.map((content: TripContent, i) => {
              console.log(content);
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
              }
            })}
          </Box>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <Box maxWidth="lg" margin="auto">
          Contents are loading...
        </Box>
      </>
    );
  }
};
