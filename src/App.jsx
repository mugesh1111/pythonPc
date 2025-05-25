import { Route, Routes } from 'react-router-dom';

import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";
import FifthPage from "./pages/FifthPage";
import SixthPage from "./pages/SixthPage";
import SeventhPage from "./pages/SeventhPage";
import EighthPage from "./pages/EighthPage";
import NinethPage from "./pages/NinethPage";
import TenthPage from "./pages/TenthPage";

import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/3" element={<ThirdPage />} />
      <Route path="/4" element={<FourthPage />} />
      <Route path="/5" element={<FifthPage />} />
      <Route path="/6" element={<SixthPage />} />
      <Route path="/7" element={<SeventhPage />} />
      <Route path="/8" element={<EighthPage />} />
      <Route path="/9" element={<NinethPage />} />
      <Route path="/10" element={<TenthPage />} />
    </Routes>
  )
};

export default App; 