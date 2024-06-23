import {
  Container,
  InputBase,
  IconButton,
  Stack,
  Typography,
  useTheme,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ExpandMore } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.4,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  height: "100%",
  "&:hover": {
    border: "1px solid #333",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "266px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "330px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const options = ["All Categories", "CAR", "Clothes", "Electronics"];

const Header2 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
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
  const theme = useTheme();
  return (
    <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Stack alignItems={"center"} sx={{ cursor: "pointer", marginRight: {xs: "25px", md: "0"} }} >
        <Avatar
          src="/public/logo.png"
          alt="Click shop"
          style={{ padding: 0, margin: 0, width: { xs: "20px", md: "40px" } }}
        />
        <Stack direction={"row"} sx={{display: {xs: "none", md: "block"}}}>
          <Typography
            sx={{
              color: theme.palette.secondary.main,
              fontWeight: "bold",
              fontSize: { md: "1.1rem", xs: ".8rem" },
            }}
          >
            Click {"  "}
            <span style={{ color: theme.palette.primary.main }}>shop</span>
          </Typography>
        </Stack>
      </Stack>

      <Search
        sx={{
          display: "flex",
          borderRadius: "22px",
          justifyContent: "space-between",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />

        <div>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              // @ts-ignore
              bgcolor: theme.palette.favColor.main,
              borderBottomRightRadius: 22,
              borderTopRightRadius: 22,
              p: "0",
            }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                // className="border"
                sx={{
                  width: 93,
                  textAlign: "center",
                  "&:hover": { cursor: "pointer" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "16px" }} />
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
                sx={{ fontSize: "13px", color: theme.palette.secondary.main }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Search>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{gap: {xs: 1, md: 1.8}}}
      >
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon sx={{ fontSize: "1.7rem", color: theme.palette.primary.main }} />
          </StyledBadge>
        </IconButton>
        <IconButton>
          <PersonOutlineOutlinedIcon sx={{ fontSize: "1.7rem", color: theme.palette.primary.main }} />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default Header2;
