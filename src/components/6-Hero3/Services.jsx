



import {
  Container,
  Stack,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,

  CardActionArea,

} from "@mui/material";
import image1 from "../../../src/assets/image/Frame 641.png";
import image2 from "../../../src/assets/image/Frame 641 (1).png";
import image3 from "../../../src/assets/image/Frame 641 (2).png";



function Services() {
    const arr = [
      {
        image: image1,
        title: "Frequently Asked Questions",
        subTitle: "Update on safe shopping in our store",
        oldPrice: "74999",
      },
      {
        image: image2,
        title: "Online payment Process",
        subTitle: "Update on safe shopping in our store",
      },
      {
        image: image3,
        title: "Home Delivery Options",
        subTitle: "Update on safe shopping in our store",
      },
    ];
  return (
    <Container sx={{ py: "15px" }}>
      <Stack >
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          <Typography sx={{ borderBottom: 3, borderColor: "#008ECC" }}>
            Services To Help <span style={{ color: "#008ECC" }}>Your Shop</span>
          </Typography>
        </Stack>
        <hr style={{ color: "#EDEDED", marginTop: "5px" }} />
        <Box sx={{ display: "flex", gap: "10px" }}>
          {arr.map((el, index) => (
            <Card key={index} sx={{ width: "391px", height: "391px" }}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontSize: "24px",
                      fontWeight: "700",
                      lineHeight: "30px",
                      color: "#000000",
                    }}
                  >
                    {el.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: "24px",
                      fontWeight: "400",
                      lineHeight: "30px",
                      color: "rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    {el.subTitle}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="140"
                  image={el.image}
                  alt={el.title}
                  sx={{ width: "391px", height: "273px" }}
                />
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Stack>
    </Container>
  );
}
export default Services;
