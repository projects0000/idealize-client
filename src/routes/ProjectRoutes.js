import { userRoles as ur } from "../data/UserRole";
import CreateProject from "../pages/projects/CreateProject";
import CreatedProject from "../pages/projects/CreatedProject";
import UpdateProject from "../pages/projects/UpdateProject";
export const project_routes = [
    {
        path: "/project/create",
        ele: <CreateProject />,
        availability: [ur.superAdmin]
    },
    {
        path: "/project/created",
        ele: <CreatedProject />,
        availability: [ur.superAdmin, ur.resourceManager]
    },
    {
        path: "/project/update/:projectId",
        ele: <UpdateProject />,
        availability: [ur.superAdmin, ur.resourceManager]
    }

];