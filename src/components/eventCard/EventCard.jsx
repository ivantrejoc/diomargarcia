import { Box, Typography, Button } from "@mui/material";
import carlosVivesEvent from "../../assets/img/mini-hero-5.jpg";


const EventCard = () => {
  return (
    <Box
          id="event-card"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "25rem",
            height: "35rem",
            boxSizing: "border-box",
            gap: 1,
            background: "rgba(44, 41, 41, 0.5)",
            borderRadius: "1.5625rem"
          }}
        >
          <img
            className="event-image"
            src={carlosVivesEvent}
            alt="carlos-vives"
          />
          <Typography variant="h3" component="h3">
            Cúcuta Suena
          </Typography>
          <Typography variant="text" component="p" sx={{ color: "#FFFFFF" }}>
            Lugar: Estadio General Santander, Cúcuta.{" "}
          </Typography>
          <Typography variant="text" component="p" sx={{ color: "#FFFFFF" }}>
            Fecha: 19/07/2024{" "}
          </Typography>
          <Typography variant="text" component="p" sx={{ color: "#FFFFFF" }}>
            Hora: 09:00 pm
          </Typography>
          <Button
            href="https://tuboleta.com/"
            component="a"
            sx={{
              width: "17.6875rem",
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
              marginTop: 1,
              "&:hover": {
                background: "#B0B0B0",
                color: "#fff"
              }
            }}
          >
            Comprar Tickets
          </Button>
        </Box>
  )
}
export default EventCard