import logo from "./logo.svg";
import "./App.css";
// mui
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Login from "./Components/Login";

import Navbar from "./Components/Navbar";
// routes
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Register from "./Components/Register";
const theme = createTheme({
  palette: {
    primary: {
      main: `#BF6679`,
    },
    secondary: {
      main: `#222222`,
    },
  },
});
function App() {
  const location = useLocation();
  const hideNav =
    location.pathname === "/login" || location.pathname === "/register";
  return (
    <div className="App">
      <ThemeProvider theme={theme}>{!hideNav && <Navbar />}</ThemeProvider>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
