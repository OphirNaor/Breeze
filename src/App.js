import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Menu from "./pages/Menu";
import Branches from "./pages/Branches";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Box width='400px' sx={{ width: { xl: '1600px' } }} m='auto'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/branches' element={<Branches />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
      {/* <Footer /> */}
    </Box>
  );
}

export default App;
