import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    background: {
      default: "#050704"
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#BBBBBB"
    }
  },
  typography: {
    fontFamily: ["Monsterrat", "sans-serif"],
    fontSize: 16,
    h1: {
      fontFamily: "Montserrat",
      color: "#BBBBBB",
      textAlign: "left",
      fontSize: "1.75rem",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "normal",
      letterSpacing: "-0.0875rem"
    },

    h2: {
      fontFamily: "Montserrat",
      color: "#C60000",
      fontSize: "1.5625rem",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "normal"
    },

    h3: {
      fontFamily: "Montserrat",
      color: "#FFFFFF",
      fontSize: "1.875rem",
      fontStyle: "normal",
      fontWeight: "600",
      lineheight: "112%"
    },

    h4: {
      fontFamily: "Urbanist",
      color: "#FFFFFF",
      fontSize: "1.875rem",
      fontStyle: "normal",
      fontWeight: "500",
      lineheight: "112%"
    },

    navLinks: {
      color: "#FFFFFF",
      fontFamily: "Montserrat",
      fontSize: "1.125rem",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal"
    },
    text: {
      color: "rgba(187, 187, 187, 0.73)",
      fontFamily: "Montserrat",
      fontSize: "1.125rem",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal"
    }
  },
  components: {},
  breakpoints: {
    values: {
      xs: 425,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1530,
      xxxl: 1710
    }
  },
  sizes: {
    header: 15,
    footer: 30
  }
});
