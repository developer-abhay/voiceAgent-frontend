import UserAPI from "@/api/UserAPI";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const { user, login } = useAuthContext()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  console.log(1)

  // Function to verify user
  const verifyCookies = async () => {
    setIsLoading(true) // Set Loading true
    console.log(2)

    try {
      const response = await UserAPI.verifyMe();   // ping backend to verify if cookies are valid

      if (response.status == 200) {
        const userData = response.data.user
        login(userData) // if valid set user state
      };
    } catch (error) {
      console.log('Internal Server Error')
    } finally {
      setIsLoading(false) // Set Loading false
    }
  }

  useEffect(() => {
    console.log(2)
    if (!user) {
      verifyCookies()
      console.log(3)
    } else {
      setIsLoading(false)
    }
    console.log('hello')
  }, [user, login])

  if (isLoading) return <div>Loading....</div>

  console.log(user)

  // if not valid redirect to login page
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;