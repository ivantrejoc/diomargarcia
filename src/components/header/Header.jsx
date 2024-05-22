import { Box, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import diomarLogo from "../../assets/img/logo-red.png";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const Header = () => {
  const theme = useTheme();
  const location = useLocation();

  // ANIMATIONS
  const header = useRef();
  useGSAP(() => {
    gsap.fromTo(header.current, {
      top: '100%', 
    }, {
      top: 0, 
      duration: 5, 
    });
  })

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
      ref={header}
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
};
export default Header;
