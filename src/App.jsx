import HomePage from "./routes/homePage/HomePage";
import ListPage from "./routes/listPage/ListPage";
import Layout from "./routes/layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePage from "./routes/singlePage/SinglePage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
