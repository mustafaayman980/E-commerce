import { Box, Card, Container, Typography } from "@mui/material";
import NavParThree from "../1-navPar/NavParThree";
import SecondNav from "../1-navPar/SecondNav";
import FirstNavPar from "../1-navPar/FirstNavPar";
import image1 from "../../../src/assets/image/Frame 602.png";
import image2 from "../../../src/assets/image/Frame 602 (1).png";
import image3 from "../../../src/assets/image/Frame 602 (2).png";
import image4 from "../../../src/assets/image/Frame 602 (3).png";
import image5 from "../../../src/assets/image/Frame 602 (4).png";
import image6 from "../../../src/assets/image/Frame 602 (5).png";
import image7 from "../../../src/assets/image/Frame 602 (6).png";
import image8 from "../../../src/assets/image/Frame 602 (7).png";
import image9 from "../../../src/assets/image/Frame 602 (8).png";
import Footer from "../7-Footer/Footer";
import { Link } from "react-router-dom";

function Profile() {
  const arr = [
    {
      image: image1,
      title: "Your requests",
      subTitle: "Track the order, return it, cancel it, and reship it",
      oldPrice: "74999",
    },
    {
      image: image2,
      title: "Login and security",
      subTitle: "Track the order, return it, cancel it, and reship it",
    },
    {
      image: image3,
      title: "Gift cards",
      subTitle: "Track the order, return it, cancel it, and reship it",
    },
    {
      image: image4,
      title: "Your payments",
      subTitle: "Track the order, return it, cancel it, and reship it",
    },
    {
      image: image5,
      title: "Your messages",
      subTitle: "Track the order, return it, cancel it, and reship it",
    },
    {
      image: image6,
      title: "Your addresses",
      subTitle: "Track the order, return it, cancel it, and reship it",
    },
    {
      image: image7,
      title: "call us",
      subTitle: "Track the order, return it, cancel it, and reship it",
    },
    {
      image: image8,
      title: "Your lists",
      subTitle: "Track the order, return it, cancel it, and reship it",
    },
    {
      image: image9,
      title: "Ultra market App",
      subTitle: "Track the order, return it, cancel it, and reship it",
    },
  ];
  return (
    <>
      <FirstNavPar />
      <SecondNav />
      <NavParThree />
      <Container
        sx={{ display: "flex", gap: "20px", flexWrap: "wrap", py: "25px" }}
      >
        {arr.map((el, index) => {
          return (
            <Card
              key={index}
              sx={{
                width: "370px",
                height: "150px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "15px",
              }}
            >
              <img src={el.image} width={"82px"} height={"82px"} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  gap: "15px",
                }}
              >
                <Link to={`/${el.title}`}>
                  <Typography
                    sx={{
                      fontSize: "25.87px",
                      fontWeight: "500",
                      lineHeight: "19.4px",
                      color: "#000000",
                    }}
                  >
                    {el.title}
                  </Typography>
                </Link>
                <Typography
                  sx={{
                    fontSize: "21.56px",
                    fontWeight: "400",
                    lineHeight: "19.4px",
                    color: "rgba(0, 0, 0, 0.4)",
                  }}
                >
                  {el.subTitle}
                </Typography>
              </Box>
            </Card>
          );
        })}
      </Container>
      <Footer />
    </>
  );
}
export default Profile;
