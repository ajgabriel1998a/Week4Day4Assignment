import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";

import Contactus from "./Component/Contactus";
import Dashboard from "./Component/Dashboard";
import Signup from "./Component/Signup";

const RouterApp = () =>{
 return(
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/contactus" element={<Contactus/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </BrowserRouter>
 )
}

export default RouterApp;