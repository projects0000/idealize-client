import { Link } from "react-router-dom";

const MainDashboard = () => {
    return (
        <div className="container p-4">
            <Link to="/users/add">Add User</Link> <p></p>
            <Link to="/manage/team">Manage Teams Under Developer</Link> <p></p>
            <Link to="/manage/users">Manage Users</Link> <p></p>
            <Link to="/">Login</Link> <p></p>
            <Link to="/project/create">CreateProject</Link> <p></p>
            <Link to="/project/created">UpdateProject</Link> <p></p>
            <Link to="/project/assigned/projects">AssignedProjects</Link> <p></p>
            <Link to="/project/allProjects">ViewAllProject</Link> <p></p>

        </div>
    );
}
export default MainDashboard;