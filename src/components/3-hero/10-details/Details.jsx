import {
  Box,
  Button,
  Container,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import image1 from "../../../../src/assets/image/image 15.png";
import image2 from "../../../../src/assets/image/image 15.png";
import image3 from "../../../../src/assets/image/image 15.png";
import image4 from "../../../../src/assets/image/Frame 169.png";
import image5 from "../../../../src/assets/image/image 15.png";
import SecondNav from "../../1-navPar/SecondNav";
import NavParThree from "../../1-navPar/NavParThree";

import FirstNavPar from "../../1-navPar/FirstNavPar";
import Footer from "../../7-Footer/Footer";
import ForYou from "../ForYou";
function Details() {
  return (
    <>
      <FirstNavPar />

      <SecondNav />
      <hr style={{ border: "2px solid", color: "rgba(237, 237, 237, 1)" }} />

      <NavParThree />
      <hr style={{ border: "2px solid", color: "rgba(237, 237, 237, 1)" }} />
      <Container sx={{ py: "35px" }}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            //   gap: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "space-around",
              gap: "80px",
            }}
          >
            <img src={image1} alt="image" />
            <img src={image1} alt="image" />
            <img src={image1} alt="image" />
          </Box>
          <Box>
            <img src={image4} alt="image" />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            <Typography
              sx={{
                fontSize: "43.91px",
                lineHeight: "49.4px",
                fontWeight: "600",
                color: "rgba(34, 34, 34, 1)",
              }}
            >
              Galaxy M13 (4GB | 64 GB )
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                style={{
                  fontSize: "16px",
                  lineHeight: "18px",
                  fontWeight: "700",
                  color: "rgba(34, 34, 34, 0.25)",
                }}
              >
                ₹10499
              </span>
              <span
                style={{
                  width: "118px",
                  height: "20px",
                }}
              >
                <Rating name="read-only" value={2.5} readOnly />
              </span>
              <span
                style={{
                  fontSize: "16px",
                  lineHeight: "18px",
                  fontWeight: "700",
                  color: "rgba(34, 34, 34, 0.25)",
                }}
              >
                | 20 Customer Review
              </span>
            </Box>
            <Typography
              sx={{
                fontSize: "13px",
                lineHeight: "19.5px",
                fontWeight: "400",
                color: "rgba(0, 0, 0, 1)",
                width: "511px",
                height: "454px",
              }}
            >
              About this item
              <ul>
                <li>
                  Immerse yourself in the Galaxy A05s experience: Enjoy
                  everything with stellar clarity, 6.7" FHD+ display for an
                  immersive experience when watching content and enjoying your
                  favorite games
                </li>
                <li>
                  Capture more images with multiple cameras: Galaxy A05s
                  features a complete four-camera system, 13 MP front camera, 2
                  MP Macro camera, 50 MP wide-angle camera and 2 MP depth
                  camera, versatility assured to capture every moment
                </li>
                <li>
                  Packed for superior performance: Galaxy A05s has the
                  performance capability so you can watch, play and share on
                  social media seamlessly, Powerful Snapdragon 680 processor,
                  4GB memory and 64GB internal storage
                </li>
                <li>
                  Side fingerprint sensor and headphone jack: Your safety,
                  double checked by the side fingerprint sensor, accessible only
                  with your fingerprint, 3.5 mm jack socket always ready for
                  your trusted headphones
                </li>
                <li>
                  Power that keeps you active: The (typical) 5,000mAh battery
                  gives you more time to do what you love - streaming, sharing,
                  playing games and more. With up to 25W of Super Fast Charging,
                  Galaxy A05s recovers all its power fast
                </li>
                <li>Includes clear case</li>
              </ul>
            </Typography>
          </Box>
        </Stack>
        <Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "35px",
            }}
          >
            <Box></Box>
            <Box
              sx={{
                width: "504px",
                height: "",
                fontSize: "20px",
                lineHeight: "7px",
                fontWeight: "400",
                color: "rgba(0, 0, 0, 1)",
              }}
            >
              <p>Brand Name: SAMSUNG</p>
              <p>Colour:Black/White</p>
              <p>Operating System: Android 13.0</p>
              <p>Memory Storage: 64 GB</p>
              <p>Resolution: 1080 x 2400</p>
              <p>Model Name: Samsung Galaxy M13</p>
              <p>Wireless Provider: Unlocked for All Carriers</p>
              <p>Cellular Technology: 4G</p>
              <p>Connectivity Technology: Bluetooth, Wi-Fi, USB</p>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                paddingBottom: "25px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  lineHeight: "21px",
                  fontWeight: "400",
                  color: " rgba(159, 159, 159, 1)",
                  paddingBottom: "20px",
                }}
              >
                Color
              </Typography>
              <Box sx={{ display: "flex", gap: "15px", paddingBottom: "35px" }}>
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    border: "1px solid rgba(0, 142, 204, 1)",
                    borderRadius: "50px",
                    backgroundColor: " rgba(231, 231, 231, 1)",
                  }}
                ></div>
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    border: "1px solid rgba(0, 142, 204, 1) ",
                    borderRadius: "50px",
                    backgroundColor: "rgba(0, 0, 0, 1)",
                  }}
                ></div>
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    border: "1px solid rgba(0, 142, 204, 1)",
                    backgroundColor: " rgba(78, 51, 44, 1)",
                    borderRadius: "50px",
                  }}
                ></div>
              </Box>
              <Box sx={{ display: "flex", gap: "15px" }}>
                <Button
                  sx={{
                    width: "160px",
                    height: "56px",
                    border: "1px solid rgba(0, 0, 0, 1)",
                    borderRadius: "16px",
                    padding: "18px",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                >
                  +
                </Button>
                <Button
                  sx={{
                    width: "160px",
                    height: "56px",
                    border: "1px solid rgba(0, 0, 0, 1)",
                    borderRadius: "16px",
                    padding: "18px",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                  variant="outlined"
                >
                  Add To Cart
                </Button>
                <Button
                  sx={{
                    width: "160px",
                    height: "56px",
                    border: "1px solid rgba(0, 0, 0, 1)",
                    borderRadius: "16px",
                    padding: "18px",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                  variant="outlined"
                >
                  + Compare
                </Button>
              </Box>
            </Box>
            <Box></Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              paddingBottom: "45px",
            }}
          >
            <Typography variant="h4">₹10499</Typography>|
            <Typography color="rgba(0, 0, 0, 0.7)">FREE returns</Typography>|
            <Typography color="rgba(0, 0, 0, 0.7)">
              FREE delivery Thursday, 27 June
            </Typography>
            |
            <Typography color="rgba(0, 142, 204, 1)">
              Only 4 left in stock - order soon.
            </Typography>
            |
            <Typography color="rgba(0, 0, 0, 0.7)">
              Deliver to your place
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "15px", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{
                width: "306px",
                height: "54px",
                border: "1px solid rgba(0, 142, 204, 1)",
                borderRadius: "16px",
                padding: "10px",
                color: "rgba(243, 249, 251, 1)",
              }}
            >
              Contained
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: "306px",
                height: "54px",
                border: "1px solid rgba(0, 142, 204, 1)",
                borderRadius: "16px",
                padding: "10px",
                color: "rgba(34, 34, 34, 1)",
                backgroundColor: "rgba(243, 249, 251, 1)",
              }}
            >
              Outlined
            </Button>
          </Box>
        </Stack>
        <hr style={{ border: "2px solid", color: "rgba(237, 237, 237, 1)" }} />
        
      </Container>
      <ForYou />
      <ForYou />
      <Footer />
    </>
  );
}
export default Details;
