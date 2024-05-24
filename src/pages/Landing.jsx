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
import silvestreVideo from "/silvestre-ta-malo.mp4";
import diomarLogo from "../assets/img/logo-red.png";
gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  const theme = useTheme();

  // ANIMATIONS
  const mainVideoContainer = useRef();
  const mainVideo = useRef();
  const mainVideoTitle = useRef();
  const mainVideoLogo = useRef();
  const mainEvent = useRef();
  const mainEventTitle = useRef();
  const mainEventButton = useRef();
  const nextEventsTitle = useRef();
  const nextEvents = useRef();
  const videoTitle = useRef();
  const video = useRef();
  const heroTwoTitle = useRef();
  const heroTwo = useRef();
  const heroTwoButton = useRef();

  const parallaxItems = useRef([]);

  useLayoutEffect(() => {
    // MAIN VIDEO
    gsap.fromTo(
      mainVideo.current,
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 6,
        ease: "power2.inOut"
      }
    );

    gsap.fromTo(
      mainVideoTitle.current,
      {
        x: -500,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 4,
        ease: "power2.inOut"
      }
    );

    gsap.fromTo(
      mainVideoLogo.current,
      {
        x: 500,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 4,
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
          end: "top 10%"
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
          end: "top 10%"
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
          start: "top 99%",
          end: "top 40%"
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
          end: "top 10%"
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
          end: "top 10%"
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
          end: "top 10%"
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
          end: "top 10%"
        }
      }
    );
    // HERO-2
    gsap.fromTo(
      heroTwo.current,
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
          trigger: heroTwo.current,
          start: "top 80%",
          end: "top 10%"
        }
      }
    );

    gsap.fromTo(
      heroTwoTitle.current,
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
          trigger: heroTwoTitle.current,
          start: "top 80%",
          end: "top 10%"
        }
      }
    );

    gsap.fromTo(
      heroTwoButton.current,
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: heroTwoButton.current,
          start: "top 95%",
          end: "top 10%"
        }
      }
    );
    // PARALLAX
    parallaxItems.current.forEach((container) => {
      gsap.fromTo(
        container,
        {
          y: 50, // Starting below
          opacity: 0, // Invisible
          zIndex: -1, // Behind
          ease: "power3.inOut"
        },
        {
          y: 0,
          opacity: 200,
          zIndex: 999,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    });
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
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden"
      }}
      ref={mainVideoContainer}
    >
      {/* VIDEO SECTION */}
      <Box
        id="main-video"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "100%",
          overflowX: "hidden",
          height: "100vh",
          paddingX: 4,
          // marginBottom: 10,
          position: "relative",
          backgroundSize: "cover",
          [theme.breakpoints.down("md")]: {
            height: "85vh"
          },
          [theme.breakpoints.down("sm")]: {
            height: "75vh"
          }
        }}
        ref={mainVideo}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            maxWidth: "100%",
            overflowX: "hidden",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1
          }}
        >
          <source src={silvestreVideo} type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
        <Typography
          variant="text"
          align="left"
          justify="center"
          sx={{
            color: "#FFF",
            fontSize: "7.5rem",
            fontWeight: "600",
            paddingLeft: 2,
            [theme.breakpoints.down("md")]: {
              fontSize: "4.5rem"
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "2.75rem"
            }
          }}
          ref={mainVideoTitle}
        >
          ¡Nos tomamos la fiesta muy en serio!
        </Typography>
        <img
          id="logo-main-video"
          src={diomarLogo}
          alt="diomar-logo"
          ref={mainVideoLogo}
        />
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
          maxWidth: "100%",
          overflowX: "hidden",
          height: "100vh",
          maxHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          marginBottom: 25,
          [theme.breakpoints.down("sm")]: {
            height: "60vh"
          }
        }}
        ref={(item) => (parallaxItems.current[0] = item)}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{ marginBottom: 2 }}
          ref={mainEventTitle}
        >
          <Box
            component="span"
            sx={{
              textDecoration: "underline",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.3625rem"
              }
            }}
          >
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
              lineHeight: "normal",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.3625rem"
              }
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
            },
            [theme.breakpoints.down("md")]: {
              height: "60%"
            },
            [theme.breakpoints.down("sm")]: {
              height: "50%"
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
            },
            [theme.breakpoints.down("md")]: {
              width: "16.6875rem",
              fontSize: "1.675rem"
            },
            [theme.breakpoints.down("sm")]: {
              height: "2.9375rem",
              width: "12.6875rem",
              fontSize: "1.375rem"
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
          width: "100%",
          maxWidth: "100%",
          height: "100vh",
          marginBottom: 10,
          position: "relative"
        }}
        ref={(item) => (parallaxItems.current[1] = item)}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{ marginBottom: 2 }}
          ref={nextEventsTitle}
        >
          <Box
            component="span"
            sx={{
              textDecoration: "underline",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.3625rem"
              }
            }}
          >
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
              lineHeight: "normal",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.3625rem"
              }
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
            width: "100%",
            maxWidth: "100%",
            overflowX: "hidden",
            height: "90vh",
            marginBottom: 10,
            position: "relative",
            backgroundImage: `url(${concertBackground})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: "0.60"
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
          width: "100%",
          height: "100vh",
          marginBottom: 20,
          // maxWidth: "100%",
          position: "relative",
          [theme.breakpoints.down("md")]: {
            height: "80vh"
          },
          [theme.breakpoints.down("sm")]: {
            height: "60vh"
          }
        }}
        ref={(item) => (parallaxItems.current[2] = item)}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{ marginBottom: 2 }}
          ref={videoTitle}
        >
          <Box
            component="span"
            sx={{
              textDecoration: "underline",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.3625rem"
              }
            }}
          >
            VIDEO
          </Box>
        </Typography>
        <Box
          id="video-container"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            marginBottom: 5,
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
          width: "100%",
          height: "80vh",
          marginBottom: 20,
          // maxWidth: "100%",
          position: "relative",
          [theme.breakpoints.down("md")]: {
            height: "60vh"
          },
          [theme.breakpoints.down("sm")]: {
            height: "90vh"
          }
        }}
        ref={(item) => (parallaxItems.current[3] = item)}
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
          marginBottom: 10,
          [theme.breakpoints.down("sm")]: {
            height: "60vh"
          }
        }}
        ref={(item) => (parallaxItems.current[4] = item)}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{ marginBottom: 2 }}
          ref={heroTwoTitle}
        >
          <Box
            component="span"
            sx={{
              textDecoration: "underline",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.3625rem"
              }
            }}
          >
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
              lineHeight: "normal",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.3625rem"
              }
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
            },
            [theme.breakpoints.down("md")]: {
              height: "60%"
            },
            [theme.breakpoints.down("sm")]: {
              height: "50%"
            }
          }}
          ref={heroTwo}
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
            },
            [theme.breakpoints.down("md")]: {
              width: "16.6875rem",
              fontSize: "1.675rem"
            },
            [theme.breakpoints.down("sm")]: {
              height: "2.9375rem",
              width: "12.6875rem",
              fontSize: "1.375rem"
            }
          }}
          ref={heroTwoButton}
        >
          Comprar Tickets
        </Button>
      </Box>
    </Box>
  );
}
