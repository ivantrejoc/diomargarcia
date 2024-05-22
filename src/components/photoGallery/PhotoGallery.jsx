import { Box, Grid, Typography } from "@mui/material";
import { useRef, useLayoutEffect } from "react";
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
  const photoGallery = useRef();
  const galleryText = useRef();

  useLayoutEffect(() => {
    // MAIN VIDEO
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
          end: "top 10%",
          markers: true
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
          start: "top 90%",
          end: "top 10%",
          markers: true
        }
      }
    );
  }, []);

  return (
    <Box
      id="photo-gallery"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        width: "100vw",
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
        <Grid item xs={1.2}>
          <img className="photo" src={jBalvin} alt="j-balvin" />
        </Grid>
        <Grid item xs={1.2}>
          <img className="photo" src={karloG} alt="KarolG" />
        </Grid>
        <Grid tem xs={1.2}>
          <img className="photo" src={maluma} alt="maluma" />
        </Grid>
        <Grid tem xs={1.2}>
          <img className="photo" src={badBunny} alt="bad-bunny" />
        </Grid>
        <Grid tem xs={1.2}>
          <img className="photo" src={blessd} alt="blessd" />
        </Grid>
        <Grid tem xs={1.2}>
          <img className="photo" src={silvestre} alt="silvestre-dangond" />
        </Grid>
        <Grid tem xs={1.2}>
          <img className="photo" src={carlosVives} alt="carlos-vives" />
        </Grid>
        <Grid tem xs={1.2}>
          <img className="photo" src={carinLeon} alt="carin-leon" />
        </Grid>
        <Grid tem xs={1.2}>
          <img className="photo" src={artist1} alt="artist1" />
        </Grid>
        <Grid tem xs={1.2}>
          <img className="photo" src={artist2} alt="artist2" />
        </Grid>
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
          <Box component="span" sx={{ textDecoration: "underline" }}>
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
              lineHeight: "normal"
            }}
          >
            del momento
          </Box>
        </Typography>
        <Typography
          variant="text"
          sx={{
            width: "60%",
            marginBottom: 3
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
