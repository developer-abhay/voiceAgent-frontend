import UserAPI from "@/api/UserAPI";
import { useAuthContext } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const { user } = useAuthContext()

  if (!user) {
    let response;
    UserAPI.verifyMe().then((data) => {
      response = data;
      console.log(response)
    });
    // ping backend to verify if cookies are valid
    // if not valid redirect to login page
    // if valid set user state
  }
  // const user = localStorage.getItem("user");
  // ping backend to verify if cookies are valid
  // if not valid redirect to login page
  // return user ? <Outlet /> : <Navigate to="/login" />;
  return true ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;