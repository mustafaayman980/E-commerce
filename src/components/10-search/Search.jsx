import { Box, Container, Slider, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavParThree from "../1-navPar/NavParThree";
import SecondNav from "../1-navPar/SecondNav";
import FirstNavPar from "../1-navPar/FirstNavPar";
import Footer from "../7-Footer/Footer";
import image1 from "../../../src/assets/image/image 333.png";

import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

function Search() {
  const arr = [
    {
      image: image1,
      title: "Adidas T-shirt",
      nawPrice: "150",
      oldPrice: "100",
    },
    {
      image: image1,
      title: "Adidas T-shirt",
      nawPrice: "150",
      oldPrice: "100",
    },
    {
      image: image1,
      title: "Adidas T-shirt",
      nawPrice: "150",
      oldPrice: "100",
    },
    {
      image: image1,
      title: "Adidas T-shirt",
      nawPrice: "150",
      oldPrice: "100",
    },
    {
      image: image1,
      title: "Adidas T-shirt",
      nawPrice: "150",
      oldPrice: "100",
    },
    {
      image: image1,
      title: "Adidas T-shirt",
      nawPrice: "150",
      oldPrice: "100",
    },
    {
      image: image1,
      title: "Adidas T-shirt",
      nawPrice: "150",
      oldPrice: "100",
    },
    {
      image: image1,
      title: "Adidas T-shirt",
      nawPrice: "150",
      oldPrice: "100",
    },
    {
      image: image1,
      title: "Adidas T-shirt",
      nawPrice: "150",
      oldPrice: "100",
    },
    {
      image: image1,
      title: "Adidas T-shirt",
      nawPrice: "150",
      oldPrice: "100",
    },
    {
      image: image1,
      title: "Adidas T-shirt",
      nawPrice: "150",
      oldPrice: "100",
    },
    {
      image: image1,
      title: "Adidas T-shirt",
      nawPrice: "150",
      oldPrice: "100",
    },
    {
      image: image1,
      title: "Adidas T-shirt",
      nawPrice: "150",
      oldPrice: "100",
    },
    {
      image: image1,
      title: "Adidas T-shirt",
      nawPrice: "150",
      oldPrice: "100",
    },
    {
      image: image1,
      title: "Adidas T-shirt",
      nawPrice: "150",
      oldPrice: "100",
    },
    {
      image: image1,
      title: "Adidas T-shirt",
      nawPrice: "150",
      oldPrice: "100",
    },
    {
      image: image1,
      title: "Adidas T-shirt",
      nawPrice: "150",
      oldPrice: "100",
    },
    {
      image: image1,
      title: "Adidas T-shirt",
      nawPrice: "150",
      oldPrice: "100",
    },
    {
      image: image1,
      title: "Adidas T-shirt",
      nawPrice: "150",
      oldPrice: "100",
    },
    {
      image: image1,
      title: "Adidas T-shirt",
      nawPrice: "150",
      oldPrice: "100",
    },
  ];
  const Search = styled("div")(({ theme }) => ({
    flexGrow: 0.5,
    position: "relative",
    borderRadius: "20px",

    backgroundColor: "#F3F9FB",

    "&:hover": {
      border: "1px solid #333",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "280px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "330px",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#777",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),

      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  return (
    <>
      <FirstNavPar />

      <SecondNav />
      <hr style={{ border: "2px solid", color: "rgba(237, 237, 237, 1)" }} />

      <NavParThree />
      <hr style={{ border: "2px solid", color: "rgba(237, 237, 237, 1)" }} />
      <Container sx={{ py: "25px", display: "flex", gap: "15px" }}>
        <Stack
          sx={{
            width: "340px",
            height: "1100px",
            border: "1px solid rgba(0, 142, 204, 1)",
            borderRadius: "10px",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            gap: "50px",
          }}
        >
          <Stack>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "25px",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "31.27px",
                  color: "rgba(0, 0, 0, 0.5)",
                }}
              >
                Price (EGP)
              </Typography>
              <KeyboardArrowDownIcon />
            </Box>
            <form
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
                gap: "15px",
                // paddingBottom: "25px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <input
                  style={{
                    width: "131px",
                    height: "58px",
                    border: "1px solid rgba(0, 142, 204, 1)",
                    borderRadius: "10px",
                    padding: "10px",
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "31.27px",
                    backgroundColor: "rgba(243, 249, 251, 0.5)",
                  }}
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="25"
                />
                <label
                  style={{
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "31.27px",
                    // color: "rgba(0, 0, 0, 0.5)",
                  }}
                >
                  To
                </label>
                <input
                  style={{
                    width: "131px",
                    height: "58px",
                    border: "1px solid rgba(0, 142, 204, 1)",
                    borderRadius: "10px",
                    padding: "10px",
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "31.27px",
                    backgroundColor: "rgba(243, 249, 251, 0.5)",
                  }}
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="25"
                />
              </div>
              <input
                type="submit"
                value="Go"
                style={{
                  width: "320px",
                  height: "44px",
                  border: "1px solid rgba(0, 142, 204, 1)",
                  borderRadius: "10px",
                  padding: "10px",
                  fontSize: "24px",
                  fontWeight: "400",
                  lineHeight: "31.27px",
                  backgroundColor: "rgba(243, 249, 251, 0.5)",
                }}
              />
            </form>
          </Stack>
          <Stack>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "25px",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "31.27px",
                  color: "rgba(0, 0, 0, 0.5)",
                }}
              >
                Brand
              </Typography>
              <KeyboardArrowDownIcon />
            </Box>
            <form
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
                gap: "15px",
                paddingBottom: "25px",
              }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ cursor: "pointer", color: "#008ECC" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search...."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </form>
            <form
              style={{
                display: "flex",
                justifyContent: "space-between",

                flexDirection: "column",
                gap: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: "start",
                  textAlign: "left",
                  justifyContent: "end",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    id="Adidas"
                    name="Adidas"
                    value="Adidas"
                    style={{ width: "24px", height: "24px" }}
                  />
                  <label
                    for="Adidas"
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      lineHeight: "19.54px",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    {" "}
                    Adidas
                  </label>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    id="Nike"
                    name="Nike"
                    value="Nike"
                    style={{ width: "24px", height: "24px" }}
                  />
                  <label
                    for="Nike"
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      lineHeight: "19.54px",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    {" "}
                    Nike
                  </label>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    id="Puma"
                    name="Puma"
                    value="Puma"
                    style={{ width: "24px", height: "24px" }}
                  />
                  <label
                    for="Calvin klein"
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      lineHeight: "19.54px",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    {" "}
                    Puma
                  </label>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    id="Calvin klein"
                    name="Calvin klein"
                    value="Calvin klein"
                    style={{ width: "24px", height: "24px" }}
                  />
                  <label
                    for="Calvin klein"
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      lineHeight: "19.54px",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    Calvin klein
                  </label>
                </div>
                <a
                  href="##"
                  style={{
                    textDecoration: "none",
                    fontSize: "15px",
                    fontWeight: "500",
                    lineHeight: "19.54px",
                    color: "rgba(0, 142, 204, 1)",
                  }}
                >
                  see more
                </a>
              </Box>
            </form>
          </Stack>
          <Stack>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "25px",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "31.27px",
                  color: "rgba(0, 0, 0, 0.5)",
                }}
              >
                Product Rating
              </Typography>
              <KeyboardArrowDownIcon />
            </Box>
            <Slider
              aria-label="Always visible"
              defaultValue={0}
              // getAriaValueText={valuetext}
              step={1}
              // marks={marks}
              valueLabelDisplay="on"
            />
          </Stack>
          <Stack>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "25px",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "31.27px",
                  color: "rgba(0, 0, 0, 0.5)",
                }}
              >
                New Arrivals
              </Typography>
              <KeyboardArrowDownIcon />
            </Box>

            <form
              style={{
                display: "flex",
                justifyContent: "space-between",

                flexDirection: "column",
                gap: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: "start",
                  textAlign: "left",
                  justifyContent: "end",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    id="Adidas"
                    name="Adidas"
                    value="Adidas"
                    style={{ width: "24px", height: "24px" }}
                  />
                  <label
                    for="Adidas"
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      lineHeight: "19.54px",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    {" "}
                    Adidas
                  </label>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    id="Nike"
                    name="Nike"
                    value="Nike"
                    style={{ width: "24px", height: "24px" }}
                  />
                  <label
                    for="Nike"
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      lineHeight: "19.54px",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    {" "}
                    Nike
                  </label>
                </div>
              </Box>
            </form>
          </Stack>
          <Stack>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "25px",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "31.27px",
                  color: "rgba(0, 0, 0, 0.5)",
                }}
              >
                Seller
              </Typography>
              <KeyboardArrowDownIcon />
            </Box>

            <form
              style={{
                display: "flex",
                justifyContent: "space-between",

                flexDirection: "column",
                gap: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: "start",
                  textAlign: "left",
                  justifyContent: "end",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    id="Adidas"
                    name="Adidas"
                    value="Adidas"
                    style={{ width: "24px", height: "24px" }}
                  />
                  <label
                    for="Adidas"
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      lineHeight: "19.54px",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    {" "}
                    Mustafa Ayman
                  </label>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    id="Nike"
                    name="Nike"
                    value="Nike"
                    style={{ width: "24px", height: "24px" }}
                  />
                  <label
                    for="Nike"
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      lineHeight: "19.54px",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    {" "}
                    Mustafa Ayman
                  </label>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    id="Puma"
                    name="Puma"
                    value="Puma"
                    style={{ width: "24px", height: "24px" }}
                  />
                  <label
                    for="Calvin klein"
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      lineHeight: "19.54px",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    {" "}
                    Mustafa Ayman
                  </label>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    id="Calvin klein"
                    name="Calvin klein"
                    value="Calvin klein"
                    style={{ width: "24px", height: "24px" }}
                  />
                  <label
                    for="Calvin klein"
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      lineHeight: "19.54px",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    Mustafa Ayman
                  </label>
                </div>
                <a
                  href="##"
                  style={{
                    textDecoration: "none",
                    fontSize: "15px",
                    fontWeight: "500",
                    lineHeight: "19.54px",
                    color: "rgba(0, 142, 204, 1)",
                  }}
                >
                  see more
                </a>
              </Box>
            </form>
          </Stack>
        </Stack>
        <Stack>
          <Typography
            sx={{
              pb: "20px",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "31.27px",
              color: "rgba(0, 0, 0, 0.5)",
            }}
          >
            746 Results for "
            <span
              style={{
                color: "rgba(0, 0, 0, 1)",
              }}
            >
              Adidas T-shirt
            </span>
            "
          </Typography>
          <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {arr.map((el, index) => (
              <Card
                key={index}
                sx={{ width: "190px", height: "270px", borderRadius: "16px" }}
              >
                <div
                  style={{ backgroundColor: "#F5F5F5", position: "relative" }}
                >
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
                  sx={{
                    fontSize: "14px",
                    lineHeight: "16px",
                    fontWeight: "600",
                  }}
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
            ))}
          </Box>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
export default Search;
