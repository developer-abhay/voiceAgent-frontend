import { redirect } from "react-router-dom";

export const isAuthenticated = async () => {
    const token = localStorage.getItem("token");
    // const token = true;

    if (token) throw redirect("/dashboard");
    return null;
};