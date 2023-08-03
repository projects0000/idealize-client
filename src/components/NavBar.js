import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Nav.css";
import swal from "sweetalert";
import RenderIfLoggedIn from "../utils/RenderIfLoggedIn";
import jwt_decode from "jwt-decode";
import { BsPersonFillGear, BsSendPlusFill, BsFillTelephoneFill, BsFileBarGraphFill } from 'react-icons/bs';
import { GiTrophy } from 'react-icons/gi';
import { FaTicketAlt, FaUserCheck } from "react-icons/fa";
import { AiFillHome, AiFillBell, AiFillPhone } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { ImBooks } from "react-icons/im"
const NavBar = () => {

  // state variable holds the state of the internet connection
  const [isOnline, setOnline] = useState(true);
  // On initization set the isOnline state.
  useEffect(() => { setOnline(navigator.onLine) }, [])
  // event listeners to update the state 
  window.addEventListener('online', () => { setOnline(true) });
  window.addEventListener('offline', () => { setOnline(false) });


  console.log("Nav Rendered")
  const localData = JSON.parse(localStorage.getItem("user"))
  let userData;
  if (localData) {
    userData = jwt_decode(localData?.token)?.userData;
  }
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  // Un comment this if you want to logout the app from all tabs and windows
  window.addEventListener("storage", (event) => {
    if (event.key === "user" && event.newValue === null) {
      logout();
      swal(
        "Logged Out!",
        "Sorry, NETS App is Logged out in another Tab or Window",
        "warning"
      );
    }
  });
  return (
    <React.Fragment>
      {/* hgbhb */}
      <RenderIfLoggedIn>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home"></Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-md-auto gap-2">
                <li className="nav-item rounded">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    <AiFillHome className="me-2" />
                    <span className="align-middle">Home</span>
                  </Link>
                </li>

                {/* <li className="nav-item rounded">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/notifications"
                  >
                    <AiFillBell className="me-2" />
                    <span className="align-middle">Notifications</span>
                  </Link>
                </li> */}

                {/* {
                (userData?.userRole === "Content Creator") &&
                <RenderIfLoggedIn>
                  <li className="nav-item rounded">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/chapter/department/all"
                    >
                      <ImBooks className="me-2" /> Chapters
                    </Link>
                  </li>
                </RenderIfLoggedIn>
              } */}

                <li className="nav-item rounded">
                  <a className="nav-link active" href="tel:0772116778">
                    <BsFillTelephoneFill className="me-2" />Contact
                  </a>
                </li>
                <li className="nav-item dropdown rounded">
                  <Link
                    className="nav-link active dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="me-2">
                      <img
                        className="rounded-circle"
                        referrerPolicy="no-referrer"
                        width={30}
                        height={30}
                        src={JSON.parse(localStorage.getItem("user"))?.picture}
                        alt="userProfile"
                      ></img>
                    </i>
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-menu-end  "
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <div className="disabled dropdown-item ">
                        <FaUserCheck className="me-2" />
                        <i>You are, </i>
                        <b>
                          {(userData?.userRole) ? userData?.userRole : "Guest"}
                        </b>
                      </div>
                    </li>
                    <li>
                      <hr className=" dropdown-divider" />
                    </li>
                    <li>
                      <Link className=" dropdown-item" to="/profile">
                        <BsPersonFillGear className="me-2" />
                        Profile
                      </Link>
                    </li>

                    <li><hr className=" dropdown-divider" /></li>

                    {
                      //  Render if User Role is Hired Employee
                      userData?.userRole === "Hired Employee" &&
                      <div>
                        <li >
                          <Link className=" dropdown-item" to="/leaderboard">
                            <GiTrophy className="me-2" />
                            Show Leader Board
                          </Link>
                        </li>

                        <li><hr className=" dropdown-divider" /></li>

                        <li >
                          <Link className=" dropdown-item" to="/request-guidance-ticket">
                            <FaTicketAlt className="me-2" />
                            Guidance Request Ticket
                          </Link>
                        </li>

                        <li><hr className=" dropdown-divider" /></li>

                        <li >
                          <Link className=" dropdown-item" to="/enrollrequestemployee">
                            <BsSendPlusFill className="me-2" />
                            Enroll Additional Chapter
                          </Link>
                        </li>
                        <li>
                          <hr className=" dropdown-divider" />
                        </li>
                        <li >
                          <Link className=" dropdown-item" to="/chapterreport">

                            <BsFileBarGraphFill className="me-2" />
                            Chapter Report
                          </Link>
                        </li>
                        <li>
                          <hr className=" dropdown-divider" />
                        </li>
                      </div>
                    }
                    <li>
                      <button className="dropdown-item " onClick={logout}>
                        <FiLogOut className="me-2" /> Logout
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </RenderIfLoggedIn>
      {
        (isOnline === false)
          ?
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Warning:  No internet connection available </strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          :
          null
      }

    </React.Fragment >
  );
};

export default NavBar;
