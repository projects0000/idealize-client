const RenderIfLoggedIn = ({children})=>{
    if(! JSON.parse(localStorage.getItem("user"))?.token){
        return null;
    }
    return children;
}
export default RenderIfLoggedIn;