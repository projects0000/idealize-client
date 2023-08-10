import { userRoles as ur } from "../data/UserRole";
import MainDashboard from "../pages/dashboard/MainDashboard";
import OthersProfile from "../pages/profile/OthersProfile";
import PersonalProfile from "../pages/profile/PersonalProfile";
import TodoList from "../pages/todo/ToDo";
export const dashboard_routes = [
  {
    path: "/home",
    ele: <MainDashboard />,
    availability: [ur.superAdmin, ur.operationTeam, ur.resourceManager, ur.projectManager, ur.softwareArchitect, ur.developer]
  },
  {
    path: "/profile",
    ele: <PersonalProfile />,
    availability: [ur.superAdmin, ur.operationTeam, ur.resourceManager, ur.projectManager, ur.softwareArchitect, ur.developer]
  },
  {
    path: "/profile/:id",
    ele: <OthersProfile />,
    availability: [ur.superAdmin, ur.operationTeam, ur.resourceManager, ur.projectManager, ur.softwareArchitect, ur.developer]
  },
  {
    path: "/todo",
    ele: <TodoList />,
    availability: [ur.superAdmin, ur.operationTeam, ur.resourceManager, ur.projectManager, ur.softwareArchitect, ur.developer]
  },
];
