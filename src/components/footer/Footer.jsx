import { Box, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import diomarLogo from "../../assets/img/logo-red.png";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import youtubeIcon from "../../assets/icons/youtube-icon.svg";
import instagramIcon from "../../assets/icons/instagram-icon.svg";
import tiktokIcon from "../../assets/icons/tiktok-icon.svg";

const Footer = () => {
  const theme = useTheme();
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
            position: "relative",
            [theme.breakpoints.down("md")]: {
              gap: 2
            }
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
              },
              [theme.breakpoints.down("md")]: {
                fontSize: "0.80rem"
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
              },
              [theme.breakpoints.down("md")]: {
                fontSize: "0.80rem"
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
              },
              [theme.breakpoints.down("md")]: {
                fontSize: "0.80rem"
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
              },
              [theme.breakpoints.down("md")]: {
                fontSize: "0.80rem"
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
            <img className="social-icons" src={tiktokIcon} alt="tiktok-icon" />
          </Link>
        </Box>
        <Typography
          variant="text"
          component="p"
          sx={{
            [theme.breakpoints.down("md")]: {
              fontSize: "0.80rem",
              textAlign: "center",
              textJustify: "center"      
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "0.60rem",
              textAlign: "center",
              textJustify: "center"
      
            }
          }}
        >
          © 2024 Created in Medellín, Colombia by Soluciones Star.{" "}
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;
