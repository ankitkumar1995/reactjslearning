import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { User } from "./pages/User";

const AppRouter=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/user" element={<User />}/>
        </Routes>
    )
}
export default AppRouter