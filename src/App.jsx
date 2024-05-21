
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Router from "./router";
import theme from "./theme";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./assets/css/_default.css";



function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/*  <Loader show={config.loading} /> */}
      <BrowserRouter>
      <Header />
        <Router />
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>



  )
}

export default App
