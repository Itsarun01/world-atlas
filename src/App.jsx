import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./App.css";

import TopCountries from "./pages/TopCountries";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import AppLayout from "./Components/Layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "topcountries",
        element: <TopCountries />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "country",
        element: <Country />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
