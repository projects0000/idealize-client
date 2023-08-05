import {Link} from "react-router-dom";
const MainDashboard = () => {
    return (
        <div className="container p-4">
            Home Page<br/>
            <Link to="/project/create">Create project</Link><br/>
            <Link to="/project/update">Update project</Link><br/>


        </div>
    );
}
export default MainDashboard;