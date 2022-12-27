import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/details/Details";
import Error404 from "./components/error404/Error404";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/product" element={<Error404 />} />
       </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
