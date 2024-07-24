import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
function Links({ title }) {
  return (
    <div>
      <Box
        sx={{
          ":hover .show-when-hover": { display: "block" },
          ":hover": { cursor: "pointer" },

          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography>{title}</Typography>
        <ExpandMore sx={{color:"#008ECC"}}/>
        <Box
          className="show-when-hover"
          sx={{
            position: "absolute",
            minWidth: "150px",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            display: "none",
            zIndex:2,
          }}
        >
          <Paper sx={{ mt: "10px",}}>
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: 0,
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: 300,
                        },
                      }}
                      primary="Dashboard"
                    />
                    <Box flexGrow={1} />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  sx={{
                    ":hover .sub-link": { display: "block" },
                    position: "relative",
                  }}
                  disablePadding
                >
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: 0,
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: 300,
                        },
                      }}
                      primary="Products"
                    />
                    <Box flexGrow={1} />

                    <KeyboardArrowRightOutlined sx={{color:"#008ECC"}} fontSize="small" />
                  </ListItemButton>
                  <Box
                    className="sub-link"
                    sx={{
                      display: "none",
                      position: "absolute",
                      top: 0,
                      left: "100%",
                    }}
                  >
                    <Paper sx={{ ml: 1, minWidth: 150 }}>
                      <nav aria-label="secondary mailbox folders">
                        <List>
                          <ListItem disablePadding>
                            <ListItemButton
                              sx={{
                                display: "flex",
                                p: 0,
                                px: 1.5,
                              }}
                            >
                              <ListItemText
                                sx={{
                                  ".MuiTypography-root": {
                                    fontSize: "15px",
                                    fontWeight: 300,
                                  },
                                }}
                                primary="Add products"
                              />
                              <Box flexGrow={1} />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton
                              sx={{
                                display: "flex",
                                p: 0,
                                px: 1.5,
                              }}
                            >
                              <ListItemText
                                sx={{
                                  ".MuiTypography-root": {
                                    fontSize: "15px",
                                    fontWeight: 300,
                                  },
                                }}
                                primary="Edit product"
                              />
                              <Box flexGrow={1} />
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </nav>
                    </Paper>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: 0,
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: 300,
                        },
                      }}
                      primary="orders"
                    />
                    <Box flexGrow={1} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: 0,
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: 300,
                        },
                      }}
                      primary="profile"
                    />
                    <Box flexGrow={1} />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Paper>
        </Box>
      </Box>
    </div>
  );
}
export default Links;
