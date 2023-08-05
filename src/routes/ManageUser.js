import { userRoles as ur } from "../data/UserRole";
import ManageTeam from "../pages/team/ManageTeam";
import AddUser from "../pages/userManagement/AddUser";
import ManageUser from "../pages/userManagement/ManageUser";

export const manage_user_routes = [
  {
    path: "/users/add",
    ele: <AddUser />,
    availability: [ur.superAdmin, ur.developer],
  },
  {
    path: "/manage/team",
    ele: <ManageTeam />,
    availability: [ur.superAdmin],
  },
  {
    path: "/manage/users",
    ele: <ManageUser />,
    availability: [ur.superAdmin],
  },
];
