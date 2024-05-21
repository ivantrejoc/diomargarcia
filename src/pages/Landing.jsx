import "../assets/css/_default.css";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Link, Button } from "@mui/material";
import Carosuel from "../components/carousel/Carousel";
import heroSilvestre from "../assets/img/hero-party-1.jpg";
import concertBackground from "../assets/img/aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg";

export default function Landing() {
  const theme = useTheme();

  return (
    <Box
      id="main-body"
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "stretch",
        flexDirection: "column",
        position: "relative",
        width: "100vw",
        // height: "800vh"
      }}
    >
      {/* VIDEO SECTION */}
      <Box
        id="main-video"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          marginBottom: 10,
          // maxWidth: "100%",
          position: "relative",
          backgroundSize: "cover",
          overflow: "hidden"
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0
            // zIndex: -1
          }}
        >
          <source
            src="https://fileblocks.co/file/avovite/ffbb4a354f55bc24618622add3821c40.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta la etiqueta de video.
        </video>
      </Box>

      {/* MAIN EVENT HERO */}
      <Box
        id="main-event-hero"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          maxHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          marginBottom: 10
        }}
      >
        <Typography variant="h2" component="h2" sx={{ marginBottom: 2 }}>
          <Box component="span" sx={{ textDecoration: "underline" }}>
            EVENTO
          </Box>
          <Box
            component="span"
            sx={{
              color: "#FFF",
              fontFamily: "Montserrat",
              fontSize: "1.5625rem",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal"
            }}
          >
            PRINCIPAL
          </Box>
        </Typography>
        <Box
          id="hero-container"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "95%",
            height: "100%",
            // maxWidth: "100%",
            position: "relative",
            backgroundImage: `url(${heroSilvestre})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            borderRadius: 5,
            marginBottom: 2
          }}
        />
        <Button
          href="https://tuboleta.com/"
          component="a"
          sx={{
            width: "22.6875rem",
            height: "3.9375rem",
            flexShrink: 0,
            boxSizing: "border-box",
            borderRadius: "1.5625rem",
            background: "#D9D9D9",
            color: "#000",
            fontFamily: "Montserrat",
            fontSize: "1.875rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "120%",
            textTransform: "none",
            "&:hover": {
              background: "#B0B0B0",
              color: "#fff"
            }
          }}
        >
          Comprar Tickets
        </Button>
      </Box>

      {/* CAROUSEL */}

      <Box
        id="carousel-container"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          marginBottom: 10,
          // maxWidth: "100%",
          position: "relative"
        }}
      >
        <Typography variant="h2" component="h2" sx={{ marginBottom: 2 }}>
          <Box component="span" sx={{ textDecoration: "underline" }}>
            PRÓXIMOS
          </Box>
          <Box
            component="span"
            sx={{
              color: "#FFF",
              fontFamily: "Montserrat",
              fontSize: "1.5625rem",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal"
            }}
          >
            EVENTOS
          </Box>
        </Typography>
        <Box
          id="carousel-container"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "90vh",
            marginBottom: 10,
            // maxWidth: "100%",
            position: "relative",
            backgroundImage: `url(${concertBackground})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        >
          <Carosuel />
        </Box>
      </Box>
    </Box>
  );
}
