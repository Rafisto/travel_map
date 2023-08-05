import { useState, useEffect } from "react";
import { TripContents } from "../general/.interfaces";

export const useArticleObject = (articleUrl: string) => {
  const [contents, setContents] = useState<TripContents>();

  useEffect(() => {
    const LoadTripContent = () => {
      void fetch(articleUrl, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setupData(data as TripContents));
    };
    LoadTripContent();
  }, [articleUrl]);

  const setupData = (data: TripContents) => {
    setContents(data);
  };

  return {
    ready: contents ? true : false,
    contents: contents as TripContents,
  };
};
