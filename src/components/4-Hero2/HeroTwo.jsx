import {
  Container,
  Stack,
  Typography,
  Card,
  CardMedia,
  CardContent,
 
  Box,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import image1 from "../../../src/assets/image/Frame 630.png";
import image2 from "../../../src/assets/image/Frame 630 (1).png";
import image3 from "../../../src/assets/image/Frame 630 (2).png";
import image4 from "../../../src/assets/image/Frame 630.png";
import image5 from "../../../src/assets/image/Frame 630.png";
import image6 from "../../../src/assets/image/Frame 631.png";

function HeroTwo() {
  const arr = [
    {
      image: image1,
      title: "Makeup",
      nawPrice: "32999",
      oldPrice: "74999",
    },
    {
      image: image2,
      title: "Haircare",
      nawPrice: "10499",
      oldPrice: "14999",
    },
    {
      image: image3,
      title: "Skincare",
      nawPrice: "16999",
      oldPrice: "24999",
    },
    {
      image: image4,
      title: "Makeup",
      nawPrice: "16999",
      oldPrice: "24999",
    },
    {
      image: image5,
      title: "Makeup",
      nawPrice: "16999",
      oldPrice: "24999",
    },
  ];
  return (
    <Container sx={{ py: "25px" }}>
      <img src={image6} alt="imageHero" />

      <Stack sx={{ py: "35px" }}>
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          <Typography sx={{ borderBottom: 3, borderColor: "#008ECC" }}>
             <span style={{ color: "#008ECC" }}>Beauty</span>
          </Typography>

          <Link to="/view-all">
            view all <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
          </Link>
        </Stack>
        <hr style={{ color: "#EDEDED", marginTop: "5px" }} />
        <Box sx={{ display: "flex", gap: "10px" }}>
          {arr.map((el, index) => (
            <Card
              key={index}
              sx={{ width: "227px", height: "295px", borderRadius: "16px" }}
            >
              <div
                style={{
                  backgroundColor: "#FFB6ED",
                  position: "relative",
                  width: "100%",
                  height: "80%",
                }}
              >
                <CardMedia
                  component="img"
                  image={el.image}
                  alt={el.title}
                  sx={{
                    width: "70%",
                    transform: " translate(30px, 30px)",
                  }}
                />
                <IconButton
                  aria-label="add to favorites"
                  sx={{ position: "absolute", top: "5px" }}
                >
                  <FavoriteIcon />
                </IconButton>
                <Box
                  sx={{
                    backgroundColor: "#008ECC",
                    width: "51px",
                    height: "53px",
                    borderRadius: "0 16px 0 16px",
                    position: "absolute",
                    top: "0",
                    right: "0",
                    textAlign: "center",
                    fontSize: "14px",
                    lineHeight: "16px",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  <Typography>56%</Typography>
                  <Typography>OFF</Typography>
                </Box>
              </div>
              <CardContent
                sx={{ fontSize: "14px", lineHeight: "16px", fontWeight: "600" }}
              >
                <Typography variant="h6" component="div">
                  {el.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Stack>
    </Container>
  );
}
export default HeroTwo;
