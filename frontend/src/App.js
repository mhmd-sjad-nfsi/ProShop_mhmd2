import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { deepPurple, amber } from "@mui/material/colors";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: amber,
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
          <h1>Material Design 3 در ProShop</h1>
          <Button variant="contained" color="primary">
          </Button>
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
