import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import ErrirBoundaryUI from "./pages/ErrirBoundaryUI";

const AppRouter=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/user" element={<User />}/>
            <Route path="/error-boundary" element={<ErrirBoundaryUI/>}/>
        </Routes>
    )
}
export default AppRouter