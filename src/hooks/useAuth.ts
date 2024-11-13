import UserAPI from "@/api/UserAPI";
import { useAuthContext } from "@/context/AuthContext";
import { User } from "@/interfaces/Dashboard";
import { AxiosError } from "axios";
import { useState } from "react"

const useAuth = () => {
    const [loading, setLoading] = useState<Boolean>(false);
    const [error, setError] = useState<string | null>(null)
    const { login } = useAuthContext()

    const handleLogin = async (email: string, password: string) => {
        setLoading(true);
        setError(null);
        try {
            const data = await UserAPI.signin(email, password)
            login(data.data)
            return data.data
        } catch (err: unknown) {
            let error;
            if (err instanceof AxiosError) {
                error = err.response?.data?.message
            } else {
                error = "Login failed";
            }
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    const handleRegister = async ({ name, email, password }: User) => {
        setLoading(true);
        setError(null);
        try {
            const data = await UserAPI.signup(name, email, password)
            return data;
        } catch (err: unknown) {
            let error;
            if (err instanceof AxiosError) {
                error = err.response?.data?.message
            } else {
                error = "Registeration failed";
            }
            setError(error);
        } finally {
            setLoading(false);
        }
    }


    return { handleLogin, handleRegister, loading, error }
}

export default useAuth