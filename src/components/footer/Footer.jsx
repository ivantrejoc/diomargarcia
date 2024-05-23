import { Box, Typography, Link } from "@mui/material";
import diomarLogo from "../../assets/img/logo-red.png";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import youtubeIcon from "../../assets/icons/youtube-icon.svg";
import instagramIcon from "../../assets/icons/instagram-icon.svg";
import tiktokIcon from "../../assets/icons/tiktok-icon.svg";

const Footer = () => {
  return (
    <Box
    id="footer"
    sx={{
      display: "flex",
      justifyContent: "stretch",
      alignItems: "center",
      flexDirection: "column",

      width: "100%",
      maxWidth: "100%",
      height: "45vh"
    }}
  >
    <Box
      id="footer-container"
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
        gap: 3,
        width: "40vw",
        maxWidth: "40vw",
        height: "40vh",
        maxHeight: "40vh",
        marginY: 1
      }}
    >
      <img id="logo-footer" src={diomarLogo} alt="logo-diomar-garcia" />
      <Box
        id="links-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          width: "fit-content",
          height: "fit-content",
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
      <Box
        id="icons-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          width: "fit-content",
          height: "4rem",
          position: "relative"
        }}
      >
        <Link href="#" component="a">
          <img
            className="social-icons"
            src={facebookIcon}
            alt="facebook-icon"
          />
        </Link>
        <Link href="#" component="a">
          <img
            className="social-icons"
            src={youtubeIcon}
            alt="youtube-icon"
          />
        </Link>
        <Link href="#" component="a">
          <img
            className="social-icons"
            src={instagramIcon}
            alt="instagram-icon"
          />
        </Link>
        <Link href="#" component="a">
          <img
            className="social-icons"
            src={tiktokIcon}
            alt="tiktok-icon"
          />
        </Link>
      </Box>
      <Typography variant="text" component="p">
        © 2024 Created in Medellín, Colombia by Soluciones Star.{" "}
      </Typography>
    </Box>
  </Box>
  )
}
export default Footer