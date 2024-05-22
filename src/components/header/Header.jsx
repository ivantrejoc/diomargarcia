import { Box, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import diomarLogo from "../../assets/img/logo-red.png";
import { useLocation } from "react-router-dom";
import { useEffect, forwardRef } from "react";
import gsap from "gsap";

const Header = forwardRef((props, ref) => {
  const theme = useTheme();
  const location = useLocation(); 

  useEffect(() => {
    if (ref && ref.current) {
      gsap.fromTo(
        ref.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 2.5, ease: "power2.inOut" }
      );
    }
  }, [ref, location.pathname]); 

  return (
    <Box
      id="header"
      component="header"
      sx={{
        background: "#000000",
        display: "flex",
        justifyContent: "start",
        alignItems: "stretch",
        width: "100vw",
        maxWidth: "100vw",
        height: "17vh",
        paddingX: 12,
        gap: 70,
        position: "relative",
        backgroundSize: "cover"
      }}
      ref={ref}
    >
      <Box
        id="logo-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          width: "fit-content",
          height: "100%",
          position: "relative"
        }}
      >
        <img id="logo-header" src={diomarLogo} alt="logo-diomar-garcia" />
        <Typography variant="h1" component="h1">
          DIOMAR GARCÍA EVENTOS
        </Typography>
      </Box>

      <Box
        id="links-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          width: "fit-content",
          height: "100%",
          position: "relative"
        }}
      >
        <Link
          href="/"
          variant="navLinks"
          underline="hover"
          sx={{
            color: location.pathname === "/" ? "#C60000" : "#FFFFFF",
            fontFamily: "Montserrat",
            fontSize: "1.35rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            "&:focus": {
              color: "#C60000"
            },
            "&:active": {
              color: "#C60000"
            }
          }}
        >
          HOME
        </Link>
        <Link
          href="/about"
          variant="navLinks"
          underline="hover"
          sx={{
            color: location.pathname === "/about" ? "#C60000" : "#FFFFFF",
            fontFamily: "Montserrat",
            fontSize: "1.35rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            "&:focus": {
              color: "#C60000"
            },
            "&:active": {
              color: "#C60000"
            }
          }}
        >
          ABOUT
        </Link>
        <Link
          href="/gallery"
          variant="navLinks"
          underline="hover"
          sx={{
            color: location.pathname === "/gallery" ? "#C60000" : "#FFFFFF",
            fontFamily: "Montserrat",
            fontSize: "1.35rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            "&:focus": {
              color: "#C60000"
            },
            "&:active": {
              color: "#C60000"
            }
          }}
        >
          GALLERY
        </Link>
        <Link
          href="/event"
          variant="navLinks"
          underline="hover"
          sx={{
            color: location.pathname === "/event" ? "#C60000" : "#FFFFFF",
            fontFamily: "Montserrat",
            fontSize: "1.35rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            "&:focus": {
              color: "#C60000"
            },
            "&:active": {
              color: "#C60000"
            }
          }}
        >
          EVENT
        </Link>
      </Box>
    </Box>
  );
});

// Set the display name for the Header component
Header.displayName = "Header";

export default Header;
