import viteLogo from "/vite.svg";
// import "./App.css";
import { Box } from "@mui/material";
import {
  Feed,
  NavBar,
  ChanelDetails,
  SearchFeed,
  VedioDetails,
} from "./components/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
  },
  {
    path: "chanels/:id",
    element: <ChanelDetails />,
  },

  {
    path: "vedio/:id",
    element: <VedioDetails />,
  },
  {
    path: "search/:searchTrem",
    element: <SearchFeed />,
  },
]);

function App() {
  // const { NavBar } = components;
  // console.log(NavBar);
  return (
    <Box sx={{ background: "#000", width: "100%" }}>
      {/* <NavBar /> */}
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
