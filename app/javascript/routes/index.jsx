import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from "../components/Todos";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Todos />} />
    </Routes>
  </Router>
);