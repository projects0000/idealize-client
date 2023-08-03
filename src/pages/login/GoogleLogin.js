import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AboutNETS from "./AboutNETS";
import InfoSection from "./InfoSection";
import FurtherDetails from "./FurtherDetails";
import Overlay from "../../components/Overlay";

const google = (window.google = window.google ? window.google : {});

const GoogleLogin = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const redirectPath = location.state?.path || "/home";
  const [isThisNewUser, setIsThisNewUser] = useState(false);
  const [googleLoginDecodedValues, setGoogleLoginDecodedValues] = useState();
  const handleGoogle = async (response) => {
    setLoading(true);
    setGoogleLoginDecodedValues(jwt_decode(response.credential));
    axios
      .post(
        process.env.REACT_APP_API_BASE + "/authentication/login",
        {
          credential: response.credential,
        }
      )
      .then((res) => {
        if (res.data.status === true) {
          setLoading(false);
          console.log(res.data);
          if (res.data.isProfileComplete === true && res.data.availability === true) {
            localStorage.setItem("user", JSON.stringify(res.data.user));
            navigate(redirectPath, { replace: true });
          } else if (res.data.isProfileComplete === false && res.data.availability === true) {
            Swal.fire(
              `Hello ${res?.data.user.firstName + " " + res.data.user.lastName
              }`,
              "Welcome to New Employee Training System !",
              "info"
            );
            setIsThisNewUser(true);
            document.getElementById("infoSection").hidden = true;
          } else if (res.data.isProfileComplete === false && res.data.availability === false) {
            Swal.fire(
              `Hello ${res?.data.user.firstName + " " + res.data.user.lastName
              }`,
              res?.data?.message,
              "warning"
            );
          }
        } else {
          alert("BackEnd Error");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Network Error");
      });
  };

  useEffect(() => {
    google?.accounts?.id?.initialize({
      client_id: "707797281139-4aqd3htq7bnut6nsp76ufc448svl64r9.apps.googleusercontent.com",
      callback: handleGoogle,
    });
    google?.accounts?.id?.renderButton(document.getElementById("loginDiv"), {
      type: "standard",
      theme: "outline",
      size: "large",
      text: "continue_with",
      shape: "square",
    });
    google?.accounts?.id?.prompt();
  }, []);

  return (
    <React.Fragment>
      <div id="infoSection" style={{ userSelect: "none" }}>
        <Overlay loading={loading} />
        <InfoSection />
        {/* <AboutNETS /> */}
      </div>
      {
        isThisNewUser === true ? (
          <FurtherDetails userData={googleLoginDecodedValues} />
        ) : null
      }
    </React.Fragment>
  );
};

export default GoogleLogin;
