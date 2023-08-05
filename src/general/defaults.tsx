export const EmptyArticle = {
  title: "Title",
  date: "Date",
  contents: [],
};

export const EmptyText = {
  type: "text",
  obj: {
    header: "Text Header",
    text: "Text Content",
  },
};

export const EmptyImage = {
  type: "image",
  obj: {
    header: "Image Header",
    text: "Image Text Content",
    image: "./photos/berliner-dom.jpg",
    caption: "Image Caption",
  },
};

export const EmptyMap = {
  type: "map",
  obj: {
    settings: {
      header: "Map Header",
      lat: "52.520008",
      lon: "13.404954",
      zoom: "13",
    },
    points: [
      {
        lat: "52.520008",
        lon: "13.404954",
        title: "Berlin",
        description: "Berlin, Germany",
      },
    ],
  },
};
