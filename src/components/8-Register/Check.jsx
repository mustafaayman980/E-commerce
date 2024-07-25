import { Box, Typography } from "@mui/material";
import backgroundImage from "../../../src/assets/image/Desktop - 18.png";
import "./login.css";

function Check() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        height: "1024px",

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",

        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box
        className="heading"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: "700",
            color: "#rgba(45, 54, 51, 1)",
            lineHeight: "50px",
          }}
        >
          Check Your Inbox
        </Typography>
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: "500",
            color: "rgba(197, 197, 197, 1)",
            lineHeight: "31px",
          }}
        >
          click on the link we sent to
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            color: "rgba(45, 54, 51, 1)",
            lineHeight: "17.5px",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              fontWeight: "700",
              color: "rgba(45, 54, 51, 1)",
              lineHeight: "17.5px",
            }}
          >
            ahmedelshaer@gmail.com 
          </span>

           to finish your account setup.
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "300",
            color: "rgba(45, 54, 51, 1)",
            lineHeight: "17.5px",
          }}
        >
          Wrong address?{" "}
          <span
            style={{
              fontSize: "14px",
              fontWeight: "700",
              color: "rgba(45, 54, 51, 1)",
              lineHeight: "17.5px",
            }}
          >
            Log out
          </span>{" "}
          to sign in with different email
        </Typography>
        <form className="form">
          <input className="login-button" type="submit" value="open Gmail" />
        </form>
      </Box>
      <span></span>
      <span></span>
    </Box>
  );
}
export default Check;
