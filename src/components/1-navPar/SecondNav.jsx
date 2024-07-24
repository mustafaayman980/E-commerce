
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, Container, IconButton, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useState } from "react";

 function SecondNav() {
    const Search = styled("div")(({ theme }) => ({
      flexGrow: 0.5,
      position: "relative",
      borderRadius: "20px",
      
      backgroundColor:"#F3F9FB",

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
    const StyledBadge = styled(Badge)(({ theme }) => ({
      "& .MuiBadge-badge": {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
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
      const [inLogin, setInLogin] = useState(false);
      let button = inLogin ? (
        <Link
          to="/Login"
          onClick={() => {
            setInLogin(false);
          }}
        >
          <Typography variant="body2" sx={{ color: "#666666" }}>
            Sign In
          </Typography>
        </Link>
      ) : (
        <Link
          to="/profile"
          onClick={() => {
            setInLogin(true);
          }}
        >
          <Typography
            sx={{ cursor: "pointer", display: "flex", flexDirection: "column" }}
          >
            welcome <span>Mustafa ayman </span>
          </Typography>
        </Link>
      );
  return (
    
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
      <Stack alignItems={"center"}>
        <ShoppingCartOutlined sx={{ cursor: "pointer", color: "#008ECC" }} />

        <Typography variant="body2" sx={{ color: "#666666" }}>
          E-commerce
        </Typography>
      </Stack>

      <Search>
        <SearchIconWrapper>
          <SearchIcon sx={{ cursor: "pointer", color: "#008ECC" }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search essentials, groceries and more..."
          inputProps={{ "aria-label": "search" }}
        />
      </Search>

      <Stack direction={"row"} alignItems={"center"}>
        <IconButton>
          <PersonOutlineOutlinedIcon
            sx={{ cursor: "pointer", color: "#008ECC" }}
          />
        </IconButton>
          {button}
        {/* <Typography variant="body2" sx={{ color: "#666666" }}>
          <Link to="/Login">Sign Up/Sign In</Link>
        </Typography> */}
       
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="primary">
            <ShoppingCartIcon sx={{ cursor: "pointer", color: "#008ECC" }} />
          </StyledBadge>
        </IconButton>
      </Stack>
    </Container>
  );
}
export default SecondNav;