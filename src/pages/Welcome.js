import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
const Welcome = () => {
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="container p-4">
                <div className="card">
                    <div className="card-header">
                        This is Welcome Page...
                    </div>
                    <div className="card-body">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className="card-footer">
                        <Link to="/sample" className="btn btn-primary form-control">Goto Sample Page</Link>
                    </div>
                </div>
                <h4></h4>

            </div>
        </React.Fragment>
    );
}
export default Welcome;