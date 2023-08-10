import jwt_decode from "jwt-decode";
import SuperAdmin from "./SuperAdmin";
import OperationTeam from "./OperationTeam";
import ResourceManager from "./ResourceManager";
import Developer from "./Developer";
import ProjectManager from "./ProjectManager";
import SWArchitect from "./SWArchitect";

const MainDashBoard = () => {

    const userRole = jwt_decode(JSON.parse(localStorage.getItem("user")).token)?.userData?.userRole;

    return (
        <div>
            <div className="container mt-4">
                {(!userRole)
                    ?
                    <p>Loading</p>
                    :
                    (userRole === "Super Admin")
                        ?
                        <SuperAdmin></SuperAdmin>
                        :
                        (userRole === "Operation Management")
                            ?
                            <OperationTeam></OperationTeam>
                            :
                            (userRole === "Resource Management")
                                ?
                                <ResourceManager></ResourceManager>
                                :
                                (userRole === "Project Manager")
                                    ?
                                    <ProjectManager></ProjectManager>
                                    :
                                    (userRole === "Software Architect")
                                        ?
                                        <SWArchitect></SWArchitect>
                                        :
                                        (userRole === "Developer")
                                            ?
                                            <Developer></Developer>
                                            :
                                            null
                }
            </div>
        </div>
    )
}
export default MainDashBoard