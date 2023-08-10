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
        availability: [ur.superAdmin, ur.operationTeam]
    },
    {
        // Assigned Projects for Resource Manager
        path: "/project/created",
        ele: <CreatedProject />,
        availability: [ur.resourceManager]
    },
    {
        path: "/project/update/:projectId",
        ele: <UpdateProject />,
        availability: [ur.superAdmin, ur.resourceManager]
    },
    {
        path: "/project/assigned/projects",
        ele: <AssignedProjects />,
        availability: [ur.resourceManager, ur.projectManager, ur.developer, ur.softwareArchitect]
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