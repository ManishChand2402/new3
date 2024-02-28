import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Honeymoon from "../components/Honeymoon/Honeymoon";

function Customroute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/honeymoon" element={<Honeymoon/>}/>
    </Routes>
  );
}

export default Customroute;
