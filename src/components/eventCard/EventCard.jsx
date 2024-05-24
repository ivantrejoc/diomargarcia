import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const EventCard = ({ image, title, place, date, hour }) => {
  const theme = useTheme();

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
        borderRadius: "1.5625rem",
        "&:hover": {
          transform: "scale(1.03)",
          borderRadius: "1.8625rem"
        },
        [theme.breakpoints.down("md")]: {
          width: "18rem",
          height: "27rem",
          borderRadius: "1.2625rem"
        },
        [theme.breakpoints.down("xs")]: {
          width: "15rem",
          height: "27rem",
          borderRadius: "1.2625rem"
        }
      }}
    >
      <img className="event-image" src={image} alt={title} />
      <Typography
        variant="h3"
        component="h3"
        sx={{
          [theme.breakpoints.down("md")]: {
            fontSize: "1.375rem"
          },
          [theme.breakpoints.down("xs")]: {
            fontSize: "1.175rem"
          }
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="text"
        component="p"
        sx={{
          color: "#FFFFFF",
          [theme.breakpoints.down("md")]: {
            fontSize: "0.975rem"
          },
          [theme.breakpoints.down("xs")]: {
            fontSize: "0.875rem"
          }
        }}
      >
        {place}
      </Typography>
      <Typography
        variant="text"
        component="p"
        sx={{
          color: "#FFFFFF",
          [theme.breakpoints.down("md")]: {
            fontSize: "0.975rem"
          },
          [theme.breakpoints.down("xs")]: {
            fontSize: "0.875rem"
          }
        }}
      >
        Fecha: {date}
      </Typography>
      <Typography
        variant="text"
        component="p"
        sx={{
          color: "#FFFFFF",
          [theme.breakpoints.down("md")]: {
            fontSize: "0.975rem"
          },
          [theme.breakpoints.down("xs")]: {
            fontSize: "0.875rem"
          }
        }}
      >
        Hora: {hour}
      </Typography>
      <Button
        href="https://tuboleta.com/"
        component="a"
        sx={{
          width: "15.6875rem",
          height: "2.9375rem",
          flexShrink: 0,
          boxSizing: "border-box",
          borderRadius: "1.5625rem",
          background: "#D9D9D9",
          color: "#000",
          fontFamily: "Montserrat",
          fontSize: "1.575rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "120%",
          textTransform: "none",
          marginTop: 1,
          "&:hover": {
            background: "#C60000",
            color: "#fff"
          },
          [theme.breakpoints.down("md")]: {
            width: "12.6875rem",
            height: "2.5375rem",
            fontSize: "1.375rem"
          },
          [theme.breakpoints.down("xs")]: {
            width: "10.6875rem",
            height: "2.5375rem",
            fontSize: "0.975rem"
          }
        }}
      >
        Comprar Tickets
      </Button>
    </Box>
  );
};
export default EventCard;
