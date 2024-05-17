
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Router from "./router"
import theme from "./theme"
import "swiper/css"
import "swiper/css/pagination"
import "./assets/css/_default.css"



function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/*  <Loader show={config.loading} /> */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>



  )
}

export default App
