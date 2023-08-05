import { userRoles as ur } from "../data/UserRole";
import CreateProject from "../pages/projects/CreateProject";
import UpdateProject from "../pages/projects/UpdateProject";
export const project_routes = [
    {
        path: "/project/create",
        ele: <CreateProject />,
        availability: [ur.superAdmin]
    },
    {
        path: "/project/update",
        ele: <UpdateProject />,
        availability: [ur.superAdmin]
    }

];
