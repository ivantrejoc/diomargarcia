import { Box, Grid, Typography } from "@mui/material";
import { useRef, useLayoutEffect } from "react";
import { useTheme } from "@mui/material/styles";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import jBalvin from "../../assets/img/FOTO 600X600 02.jpg";
import karloG from "../../assets/img/FOTO 600X600 01.jpg";
import maluma from "../../assets/img/FOTO 600X600 03.jpg";
import badBunny from "../../assets/img/FOTO 600X600 04.jpg";
import carinLeon from "../../assets/img/FOTO 600X600 05.jpg";
import blessd from "../../assets/img/FOTO 600X600 06.jpg";
import silvestre from "../../assets/img/FOTO 600X600 07.jpg";
import carlosVives from "../../assets/img/FOTO 600X600 08.jpg";
import artist1 from "../../assets/img/FOTO 600X600 09.jpg";
import artist2 from "../../assets/img/FOTO 600X600 10.jpg";
import diomarLogo from "../../assets/img/logo-red.png";
gsap.registerPlugin(ScrollTrigger);

const PhotoGallery = () => {
  const theme = useTheme();
  const photoGallery = useRef();
  const galleryText = useRef();

  useLayoutEffect(() => {
    // PHOTO GALLERY
    gsap.fromTo(
      photoGallery.current,
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
          trigger: photoGallery.current,
          start: "top 80%",
          end: "top 10%"
        }
      }
    );

    gsap.fromTo(
      galleryText.current,
      {
        y: 300,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: galleryText.current,
          start: "top 99%",
          end: "top 50%"
        }
      }
    );
  }, []);

  const images = [
    jBalvin,
    karloG,
    maluma,
    badBunny,
    carinLeon,
    blessd,
    silvestre,
    carlosVives,
    artist1,
    artist2
  ];

  return (
    <Box
      id="photo-gallery"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
        height: "100%",
        marginBottom: 20,
        position: "relative"
      }}
    >
      <Grid
        container
        spacing={0}
        alignItems="center"
        sx={{ marginBottom: 6 }}
        ref={photoGallery}
      >
        {images.map((imagen, index) => (
          <Grid item key={index} xs={2.4} sm={1.2} md={1.2}>
            <img className="photo" src={imagen} alt={`Imagen ${index + 1}`} />
          </Grid>
        ))}
      </Grid>

      <Box
        id="photo-gallery-text"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "stretch",
          alignItems: "center",
          width: "100vw",
          height: "fit-content",
          position: "relative"
        }}
        ref={galleryText}
      >
        <Typography variant="h2" component="h2" sx={{ marginBottom: 2 }}>
          <Box
            component="span"
            sx={{
              textDecoration: "underline",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.2625rem"
              }
            }}
          >
            SOLO ARTISTAS
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
                fontSize: "1.2625rem"
              }
            }}
          >
            del momento
          </Box>
        </Typography>
        <Typography
          variant="text"
          sx={{
            width: "60%",
            marginBottom: 3,
            [theme.breakpoints.down("sm")]: {
              fontSize: "1.1625rem"
            }
          }}
          align="center"
          justify="center"
        >
          ¡Momentos inolvidables garantizados! Llevamos hasta tu ciudad las
          mejores giras de artistas nacionales e internacionales. Con el sello
          de calidad de Diomar García Eventos.
        </Typography>
        <img id="logo-gallery" src={diomarLogo} alt="diomar-logo" />
      </Box>
    </Box>
  );
};
export default PhotoGallery;
