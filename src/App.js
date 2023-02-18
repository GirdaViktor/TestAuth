import React from 'react';
import Login from "./components/Login/Login";
import {Route, Routes} from "react-router";
import Success from "./components/Pages/Success/Success";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/success" element={<Success/>} />
        <Route path="*" element={<Login/>} />
      </Routes>
    </>
  );
};

export default App;
