import React from "react";
import { GlobalStyle } from "./styles/globalstyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themestyles";
import Header from "./components/utils/Header";
import Footer from "./components/utils/Footer";
import Hero from "./components/pages/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/account/Login";
import Signup from "./components/account/Signup";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/workspace" element={<Hero />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
