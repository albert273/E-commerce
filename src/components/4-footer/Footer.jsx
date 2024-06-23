
import { Box, Button, Typography, useTheme } from "@mui/material";

const Footer = () => {
    const theme = useTheme()
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        sx={{ fontSize: 18 }}
      >
        Designed and developed by
        <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
          }}
          variant="text"
          color="primary"
        >
          Albert
        </Button>
        ©2024
      </Typography>
    </Box>
  );
};

export default Footer;