import { Box, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import image1 from "../../../src/assets/image/Group 50.png";
import image2 from "../../../src/assets/image/Group 51.png";
import image3 from "../../../src/assets/image/Group 52.png";
import "react-multi-carousel/lib/styles.css";
import "./brand.css";
import { Image } from "@mui/icons-material";

function Brands() {
  const arr = [{ image: image2 }, { image: image3 }, { image: image3 }];

  return (
    <Container sx={{ py: "25px" }}>
      <Stack flexDirection={"row"} justifyContent={"space-between"}>
        <Typography sx={{ borderBottom: 3, borderColor: "#008ECC" }}>
          Top <span style={{ color: "#008ECC" }}>Electronics Brands</span>
        </Typography>
        <Link to="#">
          view all <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
        </Link>
      </Stack>
      <hr style={{ color: "#EDEDED", marginTop: "5px" }} />

      <div style={{ display: "flex" }}>
        {arr.map((el) => {
          return (
            <>
              <Box
                sx={{
                  height: "207px",
                  width: "389px",
                  borderRadius: "16px",

                  margin: "5px",
                }}
              >
                <img src={el.image} alt="image" />
              </Box>
            </>
          );
        })}
      </div>
    </Container>
  );
}

export default Brands;
