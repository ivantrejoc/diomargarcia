import { useRoutes } from "react-router-dom";
import Landing from "../pages/Landing";
import About from "../pages/About";
import Events from "../pages/Events";
import Gallery from "../pages/Gallery";


function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Landing />
    },
    
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/events",
      element: <Events />
    },
    {
      path: "/gallery",
      element: <Gallery />
    },
  ])
}

export default Router
