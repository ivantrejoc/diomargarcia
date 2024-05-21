import { Box } from "@mui/material";
import "../../assets/css/_default.css";

const VideoGallery = () => {
  return (
    <Box
      sx={{
        width: "90%",
        height: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <iframe
        width="100%"
        height="100%"
        style={{ borderRadius: "2rem" }}
        src="https://www.youtube.com/embed/NNvqaI6D5vM?si=Dp-sRqRWLc6X6KF1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </Box>
  );
};

export default VideoGallery;
