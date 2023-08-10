import { userRoles as ur } from "../data/UserRole";
import ManageTeam from "../pages/team/ManageTeam";
import AddReview from "../pages/userManagement/AddReview";
import AddUser from "../pages/userManagement/AddUser";
import ManageUser from "../pages/userManagement/ManageUser";
import ViewReview from "../pages/userManagement/ViewReviews";

export const manage_user_routes = [
  {
    path: "/users/add",
    ele: <AddUser />,
    availability: [ur.superAdmin]
  },
  {
    path: "/manage/team",
    ele: <ManageTeam />,
    availability: [ur.superAdmin]
  },
  {
    path: "/manage/users",
    ele: <ManageUser />,
    availability: [ur.superAdmin, ur.operationTeam, ur.resourceManager, ur.projectManager, ur.softwareArchitect]
  },
  {
    path: "/review",
    ele: <AddReview />,
    availability: [ur.superAdmin, ur.operationTeam, ur.resourceManager, ur.projectManager, ur.softwareArchitect, ur.developer]
  },
  {
    path: "/reviews/view",
    ele: <ViewReview />,
    availability: [ur.superAdmin, ur.operationTeam, ur.resourceManager, ur.projectManager, ur.softwareArchitect]
  },
];
