import { Box } from "@mui/material";
import backgroundImage from "../../../src/assets/image/Desktop - 18.png";

function Forget() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        height: "1024px",

        backgroundSize: "cover", // Cover the entire area
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Do not repeat the image
        display: "flex",

        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div className="con">
        <form action="" className="form">
          <div
            style={{
              fontWeight: "700",
              fontSize: "26px",
              color: "#000000",
            }}
          >
            Forgot your password?
          </div>

          <span
            style={{
              fontWeight: "500",
              fontSize: "17px",
              color: "rgb(170, 170, 170)",
              display: "flex",
              marginTop: "40px",
            }}
          >
            Enter your email address
          </span>
          <label
            style={{
              fontWeight: "400",
              fontSize: "14px",
              color: "#000000",

              marginTop: "20px",
            }}
          >
            Email
          </label>
          <input
            required=""
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />

          <input className="login-button" type="submit" value="Sign In" />
        </form>
      </div>
      <span></span>
    </Box>
  );
}
export default Forget;
