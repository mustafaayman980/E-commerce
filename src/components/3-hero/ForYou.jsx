import {
  Container,
  Stack,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import image1 from "../../../src/assets/image/image 3.png";
import image2 from "../../../src/assets/image/image 3 (1).png";
import image3 from "../../../src/assets/image/image 33.png";
import image4 from "../../../src/assets/image/44.png";
import image5 from "../../../src/assets/image/image 5.png";

function ForYou() {
  const arr = [
    {
      image: image1,
      title: "Galaxy S22 Ultra",
      nawPrice: "32999",
      oldPrice: "74999",
    },
    {
      image: image2,
      title: "Galaxy M13 (4GB | 64 GB )",
      nawPrice: "10499",
      oldPrice: "14999",
    },
    {
      image: image3,
      title: "Galaxy M33 (4GB | 64 GB )",
      nawPrice: "16999",
      oldPrice: "24999",
    },
    {
      image: image4,
      title: "Galaxy M33 (4GB | 64 GB )",
      nawPrice: "16999",
      oldPrice: "24999",
    },
    {
      image: image5,
      title: "Galaxy M33 (4GB | 64 GB )",
      nawPrice: "16999",
      oldPrice: "24999",
    },
  ];

  return (
    <Container sx={{ py: "25px" }}>
      <Stack flexDirection={"row"} justifyContent={"space-between"}>
        <Typography sx={{ borderBottom: 3, borderColor: "#008ECC" }}>
          Today Best Deals <span style={{ color: "#008ECC" }}>For You</span>
        </Typography>

        <Link to="/view-all">
          view all <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
        </Link>
      </Stack>
      <hr style={{ color: "#EDEDED", marginTop: "5px" }} />
      <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {arr.map((el, index) => (
          <Link key={index} to={`/${el.title}`} style={{textDecoration:"none"}} >
            <Card
              key={index}
              sx={{
                width: "217px",
                height: "350px",
                borderRadius: "16px",
                cursor: "pointer",
              }}
            >
              <div style={{ backgroundColor: "#F5F5F5", position: "relative" }}>
                <CardMedia
                  component="img"
                  image={el.image}
                  alt={el.title}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    width: "50%",
                    marginLeft: "50px",
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
                <Typography variant="body2" color="text.secondary">
                  <span
                    style={{ textDecoration: "line-through", marginRight: 8 }}
                  >{`₹${el.oldPrice}`}</span>
                  <span>{`₹${el.nawPrice}`}</span>
                </Typography>
              </CardContent>
              <CardActions
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ color: "#249B3E" }}
                >
                  <span>{`Save - ₹${el.nawPrice}`}</span>
                </Typography>
                <Button
                  size="small"
                  color="primary"
                  sx={{
                    border: ".5px solid ",
                    borderColor: "primary",
                    fontSize: "10px",
                    width: "87px",
                    height: "21.5px",
                    lineHeight: "13px",
                  }}
                >
                  Add to card
                </Button>
              </CardActions>
            </Card>
          </Link>
          // <Card
          //   key={index}
          //   sx={{ width: "217px", height: "350px", borderRadius: "16px",cursor: "pointer", }}
          // >
          //   <div style={{ backgroundColor: "#F5F5F5", position: "relative" }}>
          //     <CardMedia
          //       component="img"
          //       image={el.image}
          //       alt={el.title}
          //       sx={{
          //         display: "flex",
          //         alignItems: "center",
          //         textAlign: "center",
          //         width: "50%",
          //         marginLeft: "50px",
          //       }}
          //     />
          //     <IconButton
          //       aria-label="add to favorites"
          //       sx={{ position: "absolute", top: "5px" }}
          //     >
          //       <FavoriteIcon />
          //     </IconButton>
          //     <Box
          //       sx={{
          //         backgroundColor: "#008ECC",
          //         width: "51px",
          //         height: "53px",
          //         borderRadius: "0 16px 0 16px",
          //         position: "absolute",
          //         top: "0",
          //         right: "0",
          //         textAlign: "center",
          //         fontSize: "14px",
          //         lineHeight: "16px",
          //         fontWeight: "600",
          //         color: "white",
          //       }}
          //     >
          //       <Typography>56%</Typography>
          //       <Typography>OFF</Typography>
          //     </Box>
          //   </div>
          //   <CardContent
          //     sx={{ fontSize: "14px", lineHeight: "16px", fontWeight: "600" }}
          //   >
          //     <Typography variant="h6" component="div">
          //       {el.title}
          //     </Typography>
          //     <Typography variant="body2" color="text.secondary">
          //       <span
          //         style={{ textDecoration: "line-through", marginRight: 8 }}
          //       >{`₹${el.oldPrice}`}</span>
          //       <span>{`₹${el.nawPrice}`}</span>
          //     </Typography>
          //   </CardContent>
          //   <CardActions
          //     sx={{ display: "flex", justifyContent: "space-between" }}
          //   >
          //     <Typography
          //       variant="body2"
          //       color="text.secondary"
          //       sx={{ color: "#249B3E" }}
          //     >
          //       <span>{`Save - ₹${el.nawPrice}`}</span>
          //     </Typography>
          //     <Button
          //       size="small"
          //       color="primary"
          //       sx={{
          //         border: ".5px solid ",
          //         borderColor: "primary",
          //         fontSize: "10px",
          //         width: "87px",
          //         height: "21.5px",
          //         lineHeight: "13px",
          //       }}
          //     >
          //       Add to card
          //     </Button>
          //   </CardActions>
          // </Card>
        ))}
      </Box>
    </Container>
  );
}

export default ForYou;
