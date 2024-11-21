import React from "react";
import "./index.css";
import {
  BrowserRouter as Router, Routes, Route, Navigate
} from 'react-router-dom';
import Form from "./Component/Form";
import Registration from "./Component/Registration";
import Home from "./Component/Home";

export default function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} Component={Home}></Route>
          <Route path="/Registration" element={<Registration />} Component={Registration}></Route>
          <Route path="/Form" element={<Form />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
