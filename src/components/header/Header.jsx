import { Box, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import { useEffect, forwardRef } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import gsap from "gsap";
import diomarLogo from "../../assets/img/logo-red.png";

const Header = forwardRef((props, ref) => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Adjust breakpoint for tablets

  useEffect(() => {
    if (ref && ref.current) {
      gsap.fromTo(
        ref.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 2.5, ease: "power2.inOut" }
      );
    }
  }, [ref, location.pathname]);

  console.log("EL MATCH DE isMobile:", isMobile);
  return (
    <Box
      id="header"
      component="header"
      sx={{
        background: "#000000",
        display: "flex",
        justifyContent: "start",
        alignItems: "stretch",
        width: "100%",
        maxWidth: "100%",
        height: "17vh",
        paddingX: 12,
        gap: 70,
        position: "relative",
        backgroundSize: "cover",
        [theme.breakpoints.down("xxl")]: {
          paddingX: 8,
          gap: 20,
          overflowX: "hidden"
        },
        [theme.breakpoints.down("md")]: {
          paddingX: 2,
          gap: 11
        },
        [theme.breakpoints.down("sm")]: {
          gap: 3
        }
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
          position: "relative",
          [theme.breakpoints.down("xxl")]: {
            width: "40%",
            overflow: "hidden"
          },
          [theme.breakpoints.down("md")]: {
            width: "60%",
            gapX: 4
          }
        }}
      >
        <img id="logo-header" src={diomarLogo} alt="logo-diomar-garcia" />
        <Typography
          variant="h1"
          component="h1"
          sx={{
            [theme.breakpoints.down("sm")]: {
              fontSize: "1.3rem"
            }
          }}
        >
          DIOMAR GARCÍA EVENTOS
        </Typography>
      </Box>
      {isMobile && <BurgerMenu />}

      {!isMobile && (
        <Box
          id="links-container"
          sx={{
            background: "blue",
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
      )}
    </Box>
  );
});

Header.displayName = "Header";

export default Header;
