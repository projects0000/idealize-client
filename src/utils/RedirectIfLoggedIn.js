import { Navigate } from "react-router-dom";

const RedirectIfLoggedIn = ({children})=>{
    if(JSON.parse(localStorage.getItem("user"))?.token){
        return <Navigate to="/home" />
    }
    return children;

}
export default RedirectIfLoggedIn;