import React from "react";
import "./index.css";
import {
  BrowserRouter as Router, Routes, Route, Navigate
} from 'react-router-dom';
import Form from "./Component/Form";
import Registration from "./Component/Registration";

export default function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Form />} Component={Form}></Route>
          <Route path="/Registration" element={Registration} Component={Registration}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
