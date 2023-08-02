import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sample from "../pages/Sample";
import Welcome from "../pages/Welcome";

const AppRoutes = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Welcome></Welcome>} />
                    <Route exact path="/sample" element={<Sample></Sample>} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}
export default AppRoutes;
