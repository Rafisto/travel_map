import { Article } from "./Article";
import { Footer } from "../general/footer";
import { ArticleEditor } from "./ArticleEditor";
import { LoadingScreen } from "../general/loadingScreen";
import { useArticleObject } from "../api/useArticleObject";
import { RouterProvider, createHashRouter } from "react-router-dom";

export const TripPlanner = () => {
  const article = useArticleObject("./trip.json");

  const Routes = createHashRouter([
    {
      path: "/",
      element: <Article contents={article.contents} />,
    },
    {
      path: "/editor",
      element: <ArticleEditor />,
    },
  ]);

  if (article.ready) {
    return (
      <>
        <RouterProvider router={Routes} />
        <Footer />
      </>
    );
  } else {
    return <LoadingScreen />;
  }
};
