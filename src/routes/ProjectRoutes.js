import { userRoles as ur } from "../data/UserRole";
import AssignedProjects from "../pages/projects/AssignedProjects";
import CreateProject from "../pages/projects/CreateProject";
import CreatedProject from "../pages/projects/CreatedProject";
import Project from "../pages/projects/Project";
import UpdateProject from "../pages/projects/UpdateProject";
import ViewAllProject from "../pages/projects/ViewAllProject";
export const project_routes = [
    {
        path: "/project/create",
        ele: <CreateProject />,
    },
    {
        path: "/project/created",
        ele: <CreatedProject />,
    },
    {
        path: "/project/update/:projectId",
        ele: <UpdateProject />,
        availability: [ur.superAdmin, ur.resourceManager]
    },
    {
        path: "/project/assigned/projects",
        ele: <AssignedProjects />,
        availability: [ur.superAdmin, ur.resourceManager, ur.projectManager, ur.developer, ur.softwareArchitect, ur.operationTeam]
    },
    {
        path: "/project/assigned/:projectId/:projectName",
        ele: <Project />,
        availability: [ur.superAdmin, ur.resourceManager, ur.projectManager, ur.developer, ur.softwareArchitect, ur.operationTeam]
    },
    {
        path: "/project/allProjects",
        ele: <ViewAllProject />,
        availability: [ur.superAdmin]
    }

];