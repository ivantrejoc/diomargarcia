import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Router from "./router";
import theme from "./theme";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import WhatsAppButton from "./components/whatsAppButton/WhatsAppButton.jsx";
import "./assets/css/_default.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const headerRef = useRef();

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <ThemeProvider theme={theme}>
      {/*  <Loader show={config.loading} /> */}
      <BrowserRouter>
        <ScrollToTop />
        <CssBaseline />
        <Header ref={headerRef} />        
        <Router />
        <WhatsAppButton />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
