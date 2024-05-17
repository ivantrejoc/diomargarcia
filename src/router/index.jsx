import { useRoutes } from "react-router-dom"
import Landing from "../pages/Landing"




function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Landing />
    },
    
  ])
}

export default Router
