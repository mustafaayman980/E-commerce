import {
  Accordion,
  AccordionSummary,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { Close } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Links from "../../pages/Links";

function NavParThree() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <Container
      sx={{
        my: 4,
        mx: 8,

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box></Box>
      {useMediaQuery("(min-width:700px)") && (
        <Stack
          gap={2}
          direction={"row"}
          alignItems={"center"}
          color={"#666666"}
        >
          <Links title={"Groceries"} />
          <Links title={"Premium Fruits"} />
          <Links title={"Home & Kitchen"} />
          <Links title={"Fashion"} />
          <Links title={"Electronics"} />
          <Links title={"Beauty"} />
          <Links title={"Home Improvement"} />
          <Links title={"Sports, Toys & Luggage"} />
        </Stack>
      )}

      {useMediaQuery("(max-width:700px)") && (
        <IconButton onClick={toggleDrawer("top", true)} >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
      >
        <Box sx={{ width: 444, mx: "auto", mt: 6, p: 5, position: "relative" }}>
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: ".3s" },
              position: "absolute",
              top: 0,
              right: 0,
            }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>
          {[
            { mainLink: "Groceries", subLink: ["Link1", "Link2", "Link3"] },
            {
              mainLink: "Premium Fruits",
              subLink: ["Link1", "Link2", "Link3"],
            },
            {
              mainLink: "Home & Kitchen",
              subLink: ["Link1", "Link2", "Link3"],
            },
            { mainLink: "Fashion", subLink: ["Link1", "Link2", "Link3"] },
            {
              mainLink: "Electronics",
              subLink: ["Link1", "Link2", "Link3"],
            },
            { mainLink: " Beauty", subLink: ["Link1", "Link2", "Link3"] },
            {
              mainLink: " Home Improvement",
              subLink: ["Link1", "Link2", "Link3"],
            },
            {
              mainLink: " Sports, Toys & Luggage",
              subLink: ["Link1", "Link2", "Link3"],
            },
          ].map((item) => {
            return (
              <Accordion
                key={item.mainLink}
                elevation={0}
                sx={{ bgcolor: "inherit" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>{item.mainLink}</Typography>
                </AccordionSummary>

                <List sx={{ py: 0, my: 0 }}>
                  {item.subLink.map((link) => {
                    return (
                      <ListItem key={link} sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText  primary={link} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
}
export default NavParThree;
