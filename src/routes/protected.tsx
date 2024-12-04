import UserAPI from "@/api/UserAPI";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const { user, login } = useAuthContext()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // Function to verify user
  const verifyCookies = async () => {
    setIsLoading(true)
    try {
      const response = await UserAPI.verifyMe();   // ping backend to verify if cookies are valid

      if (response.status == 200) {
        const userData = response.data.user
        login(userData)
      };
    } catch (error) {
      console.log('Internal Server Error')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!user) {
      verifyCookies()
    } else {
      setIsLoading(false)
    }
  }, [user, login])

  if (isLoading) return <div>Loading....</div>

  // if not valid redirect to login page
  return true ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;