import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "../utils/RequireAuth";
import RedirectIfLoggedIn from "../utils/RedirectIfLoggedIn";
// unprotectedRoutes
import { auth_routes } from "./AuthRoute";
// protectedRoutes
import { dashboard_routes } from "./DashboardRoute";
import NavBar from "../components/NavBar";
import { manage_user_routes } from "./ManageUser";
import { project_routes } from "./ProjectRoutes";

const AppRoutes = () => {
  const protectedRoutes = [
    ...dashboard_routes,
    ...manage_user_routes,
    ...project_routes
  ];

  const unprotectedRoutes = [
    ...auth_routes
  ]
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          {
            unprotectedRoutes.map((e) => {
              return (
                <Route
                  key={e.path}
                  exact
                  path={e.path}
                  element={<RedirectIfLoggedIn>{e.ele}</RedirectIfLoggedIn>}
                />
              );
            }
            )
          }

          {
            protectedRoutes.map((e) => {
              return (
                <Route
                  key={e.path}
                  exact
                  path={e.path}
                  element={
                    <RequireAuth userroles={e?.availability}>{e.ele}</RequireAuth>
                  }
                />
              );
            }
            )
          }
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
export default AppRoutes;