import { Box, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import image1 from "../../../src/assets/image/54018-9-grocery-free-hq-image 2.png";
import image2 from "../../../src/assets/image/41624-7-groceries-hd-download-hd-png 1.png";
import image3 from "../../../src/assets/image/pngegg 1.png";
import image4 from "../../../src/assets/image/23410-4-strawberry-photo 1.png";
import image5 from "../../../src/assets/image/22136-3-mango-fruit 1.png";
import image6 from "../../../src/assets/image/35763-7-cherry-fruit-file 1.png";

export default function Essentials() {
  const arr = [
    { image: image1, title: "Daily Essentials", subTitle: "UP to 50% OFF" },
    { image: image2, title: "Vegitables", subTitle: "UP to 50% OFF" },
    { image: image3, title: "Fruits", subTitle: "UP to 50% OFF" },
    { image: image4, title: "Strowberry", subTitle: "UP to 50% OFF" },
    { image: image5, title: "Mango", subTitle: "UP to 50% OFF" },
    { image: image6, title: "Cherry", subTitle: "UP to 50% OFF" },
  ];
  return (
    <Container sx={{ py: "25px" }}>
      <Stack flexDirection={"row"} justifyContent={"space-between"}>
        <Typography sx={{ borderBottom: 3, borderColor: "#008ECC" }}>
          Daily <span style={{ color: "#008ECC" }}>Essentials</span>
        </Typography>

        <Link>
          view all <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
        </Link>
      </Stack>
      <hr style={{ color: "#EDEDED", marginTop: "5px" }} />
      <div style={{ display: "flex", gap: "15px" }}>
        {arr.map((el) => {
          return (
            <>
              <div>
                <Box
                  sx={{
                    height: "187px",
                    width: "187px",
                    borderRadius: "16px",
                    backgroundColor: "#F5F5F5",
                  }}
                >
                  <img src={el.image} alt="ss" />
                </Box>
                <Stack className="text" sx={{textAlign:"center",marginTop:"25px"}}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "600",
                      lineHeight: "20px",
                      color: "#666666"
                  }}
                  >
                    {el.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "700",
                      lineHeight: "20px",
                      color: "#222222",
                    }}
                  >
                    {el.subTitle}
                  </Typography>
                </Stack>
              </div>
            </>
          );
        })}
      </div>
    </Container>
  );
}
