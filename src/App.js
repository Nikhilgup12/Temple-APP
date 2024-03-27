import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import ImageDetail from "./components/ImageDetail";
import About from "./components/About";
import NearbySearch from "./components/NearbySearch";
import AddTemple from "./components/AddTemple";
import FeatureTemple from "./components/FeatureTemple";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/image-detail/:id" element={<ImageDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/nearby-search" element={<NearbySearch />} />
      <Route path="/addTemple" element={<AddTemple />} />
      <Route path="/featured-temple" element={<FeatureTemple />} />
    </Routes>
  </BrowserRouter>
);

export default App;
