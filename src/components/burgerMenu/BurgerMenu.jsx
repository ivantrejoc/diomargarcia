import { Button, Menu, MenuItem, Fade } from "@mui/material";
import { useState } from "react";
import burgerIcon from "../../assets/icons/burger-menu-icon.svg";

const BurgerMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img src={burgerIcon} alt="burger-icon" />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
          style: {
            backgroundColor: open ? "#000" : "inherit"
          }
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          sx={{
            "&:hover": {
              color: "#C60000"
            },
            "&:active": {
              color: "#C60000"
            }
          }}
          onClick={handleClose}
        >
          HOME
        </MenuItem>
        <MenuItem
          sx={{
            "&:hover": {
              color: "#C60000"
            },
            "&:active": {
              color: "#C60000"
            }
          }}
          onClick={handleClose}
        >
          ABOUT
        </MenuItem>
        <MenuItem
          sx={{
            "&:hover": {
              color: "#C60000"
            },
            "&:active": {
              color: "#C60000"
            }
          }}
          onClick={handleClose}
        >
          GALLERY
        </MenuItem>
        <MenuItem
          sx={{
            "&:hover": {
              color: "#C60000"
            },
            "&:active": {
              color: "#C60000"
            }
          }}
          onClick={handleClose}
        >
          EVENT
        </MenuItem>
      </Menu>
    </div>
  );
};
export default BurgerMenu;
