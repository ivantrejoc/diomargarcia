import "../assets/css/_default.css";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Link } from "@mui/material";

export default function Landing() {
  const theme = useTheme();

  return (
    <Box
      id="main-body"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        flexDirection: "column",
        width: "100vw",
        maxWidth: "100vw",
        height: "100vh",
        // position: "relative",
        backgroundColor: theme.palette.background.default,
        backgroundSize: "cover",
        overflow: "hidden"
      }}
    >
      <Box
        id="main-video"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          position: "relative",
          backgroundSize: "cover"
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
          <source src="https://fileblocks.co/file/avovite/ffbb4a354f55bc24618622add3821c40.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
      </Box>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          position: "relative",
          zIndex: 1,
          color: theme.palette.text.primary,
          marginTop: "2rem",
          padding: "0 2rem"
        }}
      >
        HOME
      </Typography>
    </Box>
  );
}
