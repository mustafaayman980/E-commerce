import { Box, Button, Container, Typography } from "@mui/material";
import NavParThree from "../1-navPar/NavParThree";
import SecondNav from "../1-navPar/SecondNav";
import FirstNavPar from "../1-navPar/FirstNavPar";
import Footer from "../7-Footer/Footer";

function Security() {
  const arr = [
    {
      label: "name:",
      value: "Mustafa Ayman",
    },
    {
      label: "E-mail:",
      value: "MustafaAyman980@gmail.com",
    },
    {
      label: "Phone Number:",
      value: "01117062398",
    },
    {
      label: "Password:",
      value: "***********",
    },
    {
      label: "Two-step verification:",
      value:
        "Add a layer of security. Request a code in addition to your password.",
    },
    {
      label: "Is the account hacked?:",
      value:
        "Take steps like changing your password and logging out from everywhere.",
    },
  ];
  return (
    <>
      <FirstNavPar />

      <SecondNav />
      <hr style={{ border: "2px solid", color: "rgba(237, 237, 237, 1)" }} />

      <NavParThree />
      <hr style={{ border: "2px solid", color: "rgba(237, 237, 237, 1)" }} />
      <Container sx={{ py: "35px" }}>
        <Typography>
          Your Profile >
          <span style={{ color: "rgba(0, 142, 204, 1)" }}>
            Login and security
          </span>
        </Typography>
        <h1
          style={{
            marginTop: "20px",
          }}
        >
          {" "}
          Login and security
        </h1>

        <form
          style={{
            width: "1200px",
            height: "970px",
            border: "1px solid rgba(0, 142, 204, 0.4)",
            borderRadius: "16px",
            marginTop: "60px",
          }}
        >
          {arr.map((el, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

                padding: "10px",
                margin: "10px",
                py: "25px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "25px",
                  width: "769px",
                }}
              >
                <label
                  style={{
                    fontSize: "36px",
                    fontWeight: "500",
                    lineHeight: "19.4px",
                    color: "rgba(0, 0, 0, 0.4)",
                  }}
                >
                  {el.label}
                </label>
                <label
                  style={{
                    fontSize: "36px",
                    fontWeight: "500",
                    lineHeight: "39.4px",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                >
                  {el.value}
                </label>
              </Box>

              <Button
                sx={{
                  width: "160px",
                  height: "56px",
                  border: "1px solid rgba(34, 34, 34, 0.2)",
                  borderRadius: "16px",
                  padding: "18px",
                  color: "rgba(0, 0, 0, 0.2)",
                }}
                variant="outlined"
              >
                change
              </Button>
            </Box>
          ))}
        </form>
      </Container>
      <Footer />
    </>
  );
}
export default Security;
