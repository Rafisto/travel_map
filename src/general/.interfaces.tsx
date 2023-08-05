export interface TripContents {
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
export interface TripContent {
  type: string;
  obj: { [key: string]: any };
  [key: string]: any;
}
export interface TripTitleProps {
  title: string;
  date: string;
}
