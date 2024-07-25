import { Box, Stack, Typography } from "@mui/material";
import backgroundImage from "../../../src/assets/image/Desktop - 18.png";
import "./login.css";

function VerificationCode() {
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
          VerificationCode
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            color: "rgba(197, 197, 197, 1)",
            lineHeight: "17.5px",
          }}
        >
          Enter the identification code sent to the email
        </Typography>
        <Stack sx={{ flexDirection: "row", gap: "15px" }}>
          <Box
            sx={{
              border: "1px solid black",
              padding: "0 10px",
              borderRadius: "16px",
              width: "75px",
              height: "66px",
            }}
          >
            1
          </Box>
          <Box
            sx={{
              border: "1px solid black",
              padding: "0 10px",
              borderRadius: "16px",
              width: "75px",
              height: "66px",
            }}
          >
            2
          </Box>
          <Box
            sx={{
              border: "1px solid black",
              padding: "0 10px",
              borderRadius: "16px",
              width: "75px",
              height: "66px",
            }}
          >
            3
          </Box>
          <Box
            sx={{
              border: "1px solid black",
              padding: "0 10px",
              borderRadius: "16px",
              width: "75px",
              height: "66px",
            }}
          >
            4
          </Box>
          <Box
            sx={{
              border: "1px solid black",
              padding: "0 10px",
              borderRadius: "16px",
              width: "75px",
              height: "66px",
            }}
          >
            5
          </Box>
          <Box
            sx={{
              border: "1px solid black",
              padding: "0 10px",
              borderRadius: "16px",
              width: "75px",
              height: "66px",
            }}
          >
            6
          </Box>
        </Stack>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            color: "rgba(197, 197, 197, 1)",
            lineHeight: "17.5px",
          }}
        >
          The code will be resent after 3:45
        </Typography>
        <form className="form">
          <input className="login-button" type="submit" value="send" />
        </form>
      </Box>
      <span></span>
      <span></span>
    </Box>
  );
}
export default VerificationCode;
