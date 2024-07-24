import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Container, Stack, Typography } from "@mui/material";
function firstNavPar() {
  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <Container
        sx={{ py: "5px", display: "flex", justifyContent: "space-between",}}
      >
        <Typography>Welcome to worldwide Megamart!</Typography>

        <Stack>
          <ul
            style={{
              display: "flex",
              gap: "8px",
              listStyle: "none",
              
            }}
          >
            <li
              style={{
                fontSize: "14px",
                lineHeight: "18px",
                fontWeight: "400",
                color: "rgba(102, 102, 102, 1)",
                display: "flex",
                gap: "4px",
              }}
            >
              <span>
                <LocationOnIcon
                  sx={{ width: "18px", height: "18px", color: "#008ECC" }}
                />
              </span>

              <Typography>Deliver to 423651</Typography>
            </li>
            <li>|</li>
            <li
              style={{
                fontSize: "14px",
                lineHeight: "18px",
                fontWeight: "400",
                color: "rgba(102, 102, 102, 1)",
                display: "flex",
                gap: "4px",
              }}
            >
              <span>
                <LocalShippingIcon
                  sx={{ width: "18px", height: "18px", color: "#008ECC" }}
                />
              </span>

              <Typography>Track your order</Typography>
            </li>
            <span>|</span>

            <li
              style={{
                fontSize: "14px",
                lineHeight: "18px",
                fontWeight: "400",
                color: "rgba(102, 102, 102, 1)",
                display: "flex",
                gap: "4px",
              }}
            >
              <span>
                <LocalMallIcon
                  sx={{ width: "18px", height: "18px", color: "#008ECC" }}
                />
              </span>

              <Typography>All Offers</Typography>
            </li>
          </ul>
        </Stack>
      </Container>
    </div>
  );
}
export default firstNavPar;
