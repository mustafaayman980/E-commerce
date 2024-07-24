import { Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import image1 from "../../../src/assets/image/Frame 618.png";
import image2 from "../../../src/assets/image/Frame 619.png";
import image3 from "../../../src/assets/image/Frame 620.png";
import image4 from "../../../src/assets/image/Frame 621.png";
import image5 from "../../../src/assets/image/Frame 622.png";

function Categories() {
  const arr = [
    { image: image1, title: "Furniture" },
    { image: image2, title: "Cosmetics" },
    { image: image3, title: "Mobile" },
    { image: image4, title: "Electronics" },
    { image: image5, title: "Watches" },
  ];
  return (
    <Container sx={{ py: "25px" }}>
      <Stack flexDirection={"row"} justifyContent={"space-between"}>
        <Typography sx={{ borderBottom: 3, borderColor: "#008ECC" }}>
          Shop our top <span style={{ color: "#008ECC" }}>categories</span>
        </Typography>
        
        <Link>
          view all <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
        </Link>
      </Stack>
      <hr style={{ color: "#EDEDED", marginTop: "5px" }} />
      <div style={{display:"flex",gap:"15px"}}>
          {arr.map((el) => {
            return (
              <>
               
                <img src={el.image} alt="ss" />
              </>
            );
          })}
      </div>
    </Container>
  );
}
export default Categories;
