import UserAPI from "@/api/UserAPI";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const { user, login } = useAuthContext();
  const [isVerifying, setIsVerifying] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const verifyUser = async () => {
    try {
      // ping backend to verify if cookies are valid
      let response = await UserAPI.verifyMe()

      if (response.status === 200) {
        login(response.data.user)
        setIsAuthenticated(true)
      }
    } catch (error) {
      console.log("Verification failed: ", error);
    } finally {
      setIsVerifying(false);
    }
  }

  useEffect(() => {
    if (!user) {
      verifyUser()
    } else {
      setIsVerifying(false)
      setIsAuthenticated(true)
    }
  }, [user])

  if (isVerifying) {
    return <div> Loading....</div>
  }
  // if not valid redirect to login page
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;


// if valid set user state
// const user = localStorage.getItem("user");