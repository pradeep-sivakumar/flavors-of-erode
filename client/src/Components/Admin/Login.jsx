import React, { useState } from "react";
import "./Login.css";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Hidden,
} from "@mui/material";
import NavBar from "./Navbar/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import axios from "axios";
import LoginIcon from "@mui/icons-material/Login";
import Footer from "../Shared/Footer/Footer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        username,
        password,
      });
      setErrorMessage(null);
      console.log(response.data);

    } catch (error) {
      // Handle login error
      setErrorMessage("Password error");
      console.log(error.response.data);
    }
    ;
  };


  

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <div className="bg">
        <CssBaseline />
        <Container
          maxWidth="sm"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <Paper
            sx={{
              backgroundColor: "rgba(255, 255, 255, .89)", // Transparent background
              padding: "2rem",
            }}
            elevation={1}
          >
            <Typography
              style={{ marginBottom: "1rem" }}
              variant="h5"
              component="h1"
              align="center"
              gutterBottom
            >
              Login <LoginIcon />
            </Typography>

            <form onSubmit={handleLogin}>
              <TextField
                label="Username"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                variant="outlined"
                color="secondary" // Set the text field color to red
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {/* write code to display error message if error meesage is there */}
              {errorMessage && (
                <Typography
                  style={{ color: "red", marginBottom: "1rem" }}
                  variant="body1"
                  component="p"
                >
                  {errorMessage}
                </Typography>
              )}
              
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                style={{ backgroundColor: "#977A4D", color: "#FFFFFF" }}
                sx={{ marginTop: "1rem" }}
              >
                Log In
              </Button>
            </form>
          </Paper>
        </Container>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default Login;
