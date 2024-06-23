import { Box, Stack, ToggleButton, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import Product from "./Product";
import { grey } from "@mui/material/colors";

const Main = () => {
  const button = [
    { id: 1, name: "All Product", value: "all" },
    { id: 2, name: "Men Category", value: "men's clothing" },
    { id: 3, name: "Women Category", value: "women's clothing" },
  ];

  const [category, setCategory] = useState("all");
  const theme= useTheme()
  return (
    <>
        <Stack
      justifyContent={"space-around"}
      marginTop={"30px"}
      alignItems={"center"}
      sx={{ flexDirection: { xs: "colum", md: "row" } }}
    >
      <Box>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "1.7rem", marginBottom: "15px" }}
        >
          Selected Product
        </Typography>
        <Typography sx={{fontSize: "1.4rem"}}>
          All our new arrivals in a exclusive brand selection
        </Typography>
      </Box>
      <Stack direction={"row"} gap={1}>
      {button.map((item) => 
        <ToggleButton key={item.id} onClick={() => setCategory(item.value)} sx={{ fontSize: "1.1rem", cursor: "pointer", textTransform: "capitalize", backgroundColor: category === item.value?theme.palette.favColor.main: theme.palette.background.main, "&:hover": {backgroundColor: theme.palette.favColor.main}, color: category === item.value? theme.palette.secondary.main: grey[500] }}>{item.name}</ToggleButton>
      )}
      </Stack>
    </Stack>
    <Product category={category} />

    </>

  );
};

export default Main;
