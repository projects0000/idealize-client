import { userRoles as ur } from "../data/UserRole";
import CreateProject from "../pages/projects/CreateProject";
export const project_routes = [
    {
        path: "/project/create",
        ele: <CreateProject />,
        availability: [ur.superAdmin],
    },

];
