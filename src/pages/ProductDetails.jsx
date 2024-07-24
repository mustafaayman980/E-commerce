import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

import imagePro1 from "../assets/images/1.jfif";
import imagePro2 from "../assets/images/2.png";
import imagePro3 from "../assets/images/3.jfif";
import imagePro4 from "../assets/images/4.jfif";
import { useGetPokemonByNameQuery } from "../Redux/pokemon";
function ProductDetails() {
  const { data } = useGetPokemonByNameQuery("produtes?populate=*");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box display={"flex"}>
        <img width={300} src={imagePro1} />
      </Box>
      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">Man's fashion</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h4">
          $12.99
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labh5ore et dolore magna aliqua.
        </Typography>
        <Stack
          direction={"row"}
          gap={1}
          my={2}
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
        >
          {data.data.map((item) => {
            return (
              <img
                width={90}
                height={100}
                style={{ borderRadius: 5 }}
                key={item}
                src={`${import.meta.env.VITE_BASE_URL}${
                  item.attributes.produteimage.data[0].attributes.url
                }`}
                alt=""
              />
            );
          })}
        </Stack>
        <Button
          sx={{
            textTransform: "capitalize",
            mb: { xs: 1, sm: 0 },
          }}
          variant="contained"
        >
          <AddShoppingCartOutlined fontSize="small" sx={{ mr: 1 }} />
          Buy now
        </Button>
      </Box>
    </Box>
  );
}
export default ProductDetails;
