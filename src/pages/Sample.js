import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
const Sample = () => {
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="container p-4">
                <h4>This is Sample Page...</h4>
                <Link to="/" className="btn btn-primary">Goto Welcome Page</Link>
            </div>
        </React.Fragment>
    );
}
export default Sample;