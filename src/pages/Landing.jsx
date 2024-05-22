import "../assets/css/_default.css";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Link, Button, Grid } from "@mui/material";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Carosuel from "../components/carousel/Carousel";
import VideoGallery from "../components/videoGallery/VideoGallery";
import PhotoGallery from "../components/photoGallery/PhotoGallery";
import heroSilvestre from "../assets/img/hero-party-1.jpg";
import concertBackground from "../assets/img/aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg";
import heroJbalvin from "../assets/img/hero-party-3.jpg";
gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  const theme = useTheme();

  // ANIMATIONS
  const mainVideo = useRef();
  const mainEvent = useRef();
  const mainEventTitle = useRef();
  const mainEventButton = useRef();
  const nextEventsTitle = useRef();
  const nextEvents = useRef();
  const videoTitle = useRef();
  const video = useRef();
  

  useLayoutEffect(() => {
    // MAIN VIDEO
    gsap.fromTo(
      mainVideo.current,
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 12,
        ease: "power2.inOut"
      }
    );
    // MAIN EVENT
    gsap.fromTo(
      mainEvent.current,
      {
        x: 1000,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: mainEvent.current,
          start: "top 80%",
          end: "top 10%",
          markers: true
        }
      }
    );

    gsap.fromTo(
      mainEventTitle.current,
      {
        x: -1000,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: mainEventTitle.current,
          start: "top 80%",
          end: "top 10%",
          markers: true
        }
      }
    );

    gsap.fromTo(
      mainEventButton.current,
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: mainEventButton.current,
          start: "top 95%",
          end: "top 10%",
          markers: true
        }
      }
    );
    // NEXT EVENTS
    gsap.fromTo(
      nextEventsTitle.current,
      {
        y: -200,
        opacity: 0,
        zIndex: -1
      },
      {
        y: 0,
        zIndex: 999,
        opacity: 1,
        duration: 3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: nextEventsTitle.current,
          start: "top 80%",
          end: "top 10%",
          markers: true
        }
      }
    );

    gsap.fromTo(
      nextEvents.current,
      {
        y: 200,
        opacity: 0,
        zIndex: -1
      },
      {
        y: 0,
        zIndex: 999,
        opacity: 1,
        duration: 3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: nextEventsTitle.current,
          start: "top 80%",
          end: "top 10%",
          markers: true
        }
      }
    );
    // VIDEOS
    gsap.fromTo(
      videoTitle.current,
      {
        x: -1000,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: videoTitle.current,
          start: "top 80%",
          end: "top 10%",
          markers: true
        }
      }
    );

    gsap.fromTo(
      video.current,
      {
        x: 1000,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: video.current,
          start: "top 80%",
          end: "top 10%",
          markers: true
        }
      }
    );
  }, []);

  return (
    <Box
      id="main-body"
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "stretch",
        flexDirection: "column",
        position: "relative",
        width: "100vw"
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
        ref={mainVideo}
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
          marginBottom: 15
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{ marginBottom: 2 }}
          ref={mainEventTitle}
        >
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
            backgroundImage: `url(${heroJbalvin})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            borderRadius: 5,
            filter: "grayscale(100%)",
            transition: "filter 0.3s ease",
            marginBottom: 2,
            "&:hover": {
              filter: "grayscale(0%)"
            }
          }}
          ref={mainEvent}
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
          ref={mainEventButton}
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
        <Typography
          variant="h2"
          component="h2"
          sx={{ marginBottom: 2 }}
          ref={nextEventsTitle}
        >
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
          ref={nextEvents}
        >
          <Carosuel />
        </Box>
      </Box>
      {/* VIDEOS SECTION */}
      <Box
        id="video-gallery-container"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          marginBottom: 20,
          // maxWidth: "100%",
          position: "relative"
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{ marginBottom: 2 }}
          ref={videoTitle}
        >
          <Box component="span" sx={{ textDecoration: "underline" }}>
            VIDEO
          </Box>
        </Typography>
        <Box
          id="video-container"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100%",
            marginBottom: 10,
            position: "relative"
          }}
          ref={video}
        >
          <VideoGallery />
        </Box>
      </Box>
      {/* GALLERY SECTION */}
      <Box
        id="photo-gallery-container"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          width: "100vw",
          height: "80vh",
          marginBottom: 20,
          // maxWidth: "100%",
          position: "relative"
        }}
      >
        <PhotoGallery />
      </Box>
      {/* HERO-2 SECTION */}
      <Box
        id="hero-2"
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
        <Typography
          variant="h2"
          component="h2"
          sx={{ marginBottom: 2 }}
          ref={mainEventTitle}
        >
          <Box component="span" sx={{ textDecoration: "underline" }}>
            EN
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
            CARTELERA
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
            marginBottom: 2,
            opacity: "0.80",
            filter: "grayscale(100%)",
            transition: "filter 0.3s ease",
            "&:hover": {
              filter: "grayscale(0%)",
              opacity: "1"
            }
          }}
          ref={mainEvent}
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
          ref={mainEventButton}
        >
          Comprar Tickets
        </Button>
      </Box>
    </Box>
  );
}
