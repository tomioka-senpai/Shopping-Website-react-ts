import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
// import { LoginPage } from "./pages/LoginPage"
import { ProductDetails } from "./pages/ProductDetails";
// import { Box, CssBaseline, Paper, Typography } from "@mui/material";
import Login from "./components/Login";
import ResponsiveAppBar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="all">
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
