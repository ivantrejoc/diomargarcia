import "../assets/css/_default.css";
import { useTheme } from '@mui/material/styles';
import{ Box, Typography } from "@mui/material";

export default function Landing() {
  const theme = useTheme();

  return (
    <Box
      id="main-body"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        flexDirection: "column",
        position: "relative",
        backgroundColor: theme.palette.background.default,
        backgroundSize: "cover"
      }}
    >
      <Typography variant="h1" component="h1">DIOMAR GARCIA EVENTOS</Typography>
    </Box>
  );
}
