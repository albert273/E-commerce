import { Button, Rating, Stack, Typography, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/slice/ProductSlice";
import { AnimatePresence, motion } from "framer-motion";

const Product = ({category}) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products);
  const theme = useTheme();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(data);

  const filteredProducts = data.filter((item) =>
    category === "all" ? true : item.category === category
  );

  return (
    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-around"} sx={{marginX: "10px"}}>
                  <AnimatePresence>
            {filteredProducts.map((item) => {
              return (
                <Card
                component={motion.section}
                  layout
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
                  key={item.id}
                  sx={{
                    maxWidth: 333,
                    mt: 6,
                    ":hover .MuiCardMedia-root ": {
                      rotate: "1deg",
                      scale: "1.1",
                      transition: "0.35s",
                    },
                  }}
                >
                  <CardMedia
                    sx={{ height: 277 }}
                    // @ts-ignore
                    image={`${item.image}`}
                    title="green iguana"
                  />

                  <CardContent>
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography gutterBottom variant="h6" component="div" sx={{lineClamp: "none"}} lineHeight={"1"}>
                        {item.title}
                      </Typography>

                      <Typography variant="subtitle1" component="p">
                        ${item.price}
                      </Typography>
                    </Stack>

                    <Typography variant="body2" color="text.secondary" >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button
                      onClick={() => {

                      }}
                      sx={{ textTransform: "capitalize", color: theme.palette.secondary.main  }}
                      size="large"
                    >
                      <AddShoppingCartOutlinedIcon
                        sx={{ mr: 1 }}
                        fontSize="small"
                      />
                      add to cart
                    </Button>
                    <Rating
                      precision={0.1}
                      name="read-only"
                      value={item.rating.rate}
                      readOnly
                    />
                  </CardActions>
                </Card>
              );
            })}
            </AnimatePresence>
    </Stack>
  );
};

export default Product;
