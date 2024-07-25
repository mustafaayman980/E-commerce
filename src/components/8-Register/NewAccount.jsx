
import { Box } from "@mui/material";
import backgroundImage from "../../../src/assets/image/Desktop - 18.png";
 function NewAccount() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        height: "1024px",
        // width:"1440px",

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",

        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box
        className="con"
        // sx={{display: "flex",flexDirection: "column",}}
      >
        {/* <h1
          style={{
            fontWeight: "700",
            fontSize: "30px",
            color: "#000000",
            lineHeight: "50px",
          }}
        >
          Create a new account...
        </h1> */}
        <div className="heading">Create a new account...</div>

        <p
          style={{
            fontWeight: "400",
            fontSize: "13px",
            color: "rgba(197, 197, 197, 1)",
            lineHeight: "16.25px",
            textAlign: "center",
            paddingTop: "20px",
          }}
        >
          Enter the required data
        </p>
        <form
          action=""
          className="form"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            // border: "1px solid red",
            gap: "20px",
          }}
        >
          <div>
            <label
              style={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
                lineHeight: "20px",

                //   marginTop: "20px",
              }}
            >
              Full name
            </label>
            <input
              required=""
              className="input"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name here..."
            />
          </div>
          <div>
            <label
              style={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
                lineHeight: "20px",

                //   marginTop: "20px",
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
              placeholder="Email.."
            />
          </div>
          <div>
            <label
              style={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
                lineHeight: "20px",

                //   marginTop: "20px",
              }}
            >
              Password
            </label>
            <input
              required=""
              className="input"
              type="password"
              name="password"
              id="password"
              placeholder="Password..."
            />
          </div>
          <div>
            <label
              style={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
                lineHeight: "20px",

                //   marginTop: "20px",
              }}
            >
              Confirm Password
            </label>
            <input
              required=""
              className="input"
              type="password"
              name="password"
              id="password"
              placeholder="Password..."
            />
          </div>

          <input
            className="login-button"
            type="submit"
            value="Create a new account"
          />
        </form>
      </Box>
      <span></span>
    </Box>
  );
}
export default NewAccount;