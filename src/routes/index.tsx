import React, { Suspense } from "react";
import AuthPage from "@/pages/AuthPage";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Protected from "./protected";
import { isAuthenticated } from "./helper";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

const CreateAgent = React.lazy(() => import("@/pages/CreateAgent"));
const Dashboard = React.lazy(() => import("@/pages/Dashboard"));

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/'>
        {/* Public Routes */}
        <Route index element={<Home />} />
        <Route path='login' element={<AuthPage />} loader={async () => await isAuthenticated()} />
        <Route path='register' element={<AuthPage />} loader={async () => await isAuthenticated()} />
        {/* Protected Routes */}
        <Route element={<Protected />}>
            <Route path='create-agent' element={<Suspense fallback={<div>Loading...</div>}><CreateAgent /></Suspense>} />
            <Route path='dashboard/*' element={<Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>} />
        </Route>
        {/* Not found Route */}
        <Route path='*' element={<NotFound />} />
    </Route>

))

const Index = () => {
    return <RouterProvider router={router} />
}

export default Index;