import { userRoles as ur } from "../data/UserRole";
import AddUser from "../pages/userManagement/AddUser";

export const manage_user_routes = [
  {
      path: "/users/add",
      ele: <AddUser/>,
      availability: [ur.superAdmin],
  },
];
