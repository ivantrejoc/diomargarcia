import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import whatsappIcon from "../../assets/icons/whatsapp-icon.svg";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://walink.co/acd2bf", "_blank");
  };

  return (
    <Box>
      <SpeedDial
        ariaLabel="whatsapp-button"
        sx={{ position: "fixed", bottom: 44, right: 44, zIndex: 5000 }}
        icon={<img src={whatsappIcon} />}
        onClick={handleWhatsAppClick}
      />
    </Box>
  );
};

export default WhatsAppButton;
