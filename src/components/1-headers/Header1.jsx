import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ExpandMore,
} from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
const options = ["AR", "EN"];

const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: "4px",
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              mr: 2,
              p: "4px 10px",
              bgcolor: "#D23F57",
              borderRadius: "12px",
              fontSize: "12px",
              fontWeight: "bold",
              color: "#fff",
            }}
            variant="body2"
          >
            HOT
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 300,
              color: "#fff",
            }}
            variant="body2"
          >
            Free Express Shipping
          </Typography>

          <Box flexGrow={1} />

          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <NightsStayIcon sx={{ fontSize: "20px", color: "#fff" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <WbSunnyIcon sx={{ fontSize: "20px", color: "#fff" }} />
              </IconButton>
            )}
          </div>

          <List
            component="nav"
            aria-label="Device settings"
            sx={{ p: 0, m: 0 }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ px: 1 }}
            >
              <ListItemText
                sx={{
                  ".MuiTypography-root": { fontSize: "11px", color: "#fff" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
            </ListItem>
          </List>

          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "16px", p: "3px 10px", minHeight: "10px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          <TwitterIcon
            sx={{
              fontSize: "20px",
              color: "#fff",
               cursor: "pointer"
            }}
          />
          <FacebookIcon
            sx={{
              fontSize: "20px",
              mx: 1,
              color: "#fff",
               cursor: "pointer"
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "20px",
              color: "#fff",
               cursor: "pointer"
            }}
          />
        </Stack>
      </Container>
    </Box>
    </>

  );
};

export default Header1;