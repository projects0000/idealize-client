import { userRoles as ur } from "../data/UserRole";
import MainDashboard from "../pages/dashboard/MainDashboard";
export const dashboard_routes = [
  {
      path: "/home",
      ele: <MainDashboard/>,
      availability: [ur.superAdmin, ur.operationTeam, ur.resourceManager, ur.projectManager, ur.softwareArchitect, ur.developer],
  },
];
