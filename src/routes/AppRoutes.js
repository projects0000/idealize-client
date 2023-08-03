import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sample from "../pages/Sample";
import GoogleLogin from "../pages/login/GoogleLogin";

const AppRoutes = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<GoogleLogin />} />
          <Route exact path="/home" element={<Sample></Sample>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
export default AppRoutes;

// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import RequireAuth from "../utils/RequireAuth";
// import RedirectIfLoggedIn from "../utils/RedirectIfLoggedIn";
// import NavBar from "../components/NavBar";

// // unprotectedRoutes
// import { auth_routes } from "./AuthRoutes";
// // protectedRoutes
// import { chapter_routes } from "./ChapterRoutes";

// const AppRoutes = () => {
//   const protectedRoutes = [
//     ...chapter_routes,
//   ];
//   const unprotectedRoutes = [...auth_routes];

//   return (
//     <BrowserRouter>
//       <NavBar></NavBar>
//       <Routes>
//         {unprotectedRoutes.map((e) => {
//           return (
//             <Route
//               key={e.path}
//               exact
//               path={e.path}
//               element={<RedirectIfLoggedIn>{e.ele}</RedirectIfLoggedIn>}
//               // element={e.ele}
//             />
//           );
//         })}

//         {protectedRoutes.map((e) => {
//           return (
//             <Route
//               key={e.path}
//               exact
//               path={e.path}
//               element={
//                 <RequireAuth userroles={e?.availability}>{e.ele}</RequireAuth>
//               }
//               // element={e.ele}
//             />
//           );
//         })}
//       </Routes>
//       {/* <Footer></Footer> */}
//     </BrowserRouter>
//   );
// };
// export default AppRoutes;
