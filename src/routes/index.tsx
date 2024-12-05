import React, { Suspense } from "react";
import AuthPage from "@/pages/AuthPage";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Protected from "./protected";
import { isAuthenticated } from "./helper";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import { LoadingSpinner } from "@/components/loader";

const CreateAgent = React.lazy(() => import("@/pages/Agents"));
const Dashboard = React.lazy(() => import("@/pages/Dashboard"));

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/'>
        {/* Public Routes */}
        <Route index element={<Home />} />
        <Route path='login' element={<AuthPage />} loader={async () => await isAuthenticated()} />
        <Route path='register' element={<AuthPage />} loader={async () => await isAuthenticated()} />
        {/* Protected Routes */}
        <Route element={<Protected />}>
            <Route path='agents/:agentId' element={<Suspense fallback={<div className="h-screen flex"><LoadingSpinner className="w-20 h-20 m-auto" /></div>}><CreateAgent /></Suspense>} />
            <Route path='dashboard/*' element={<Suspense fallback={<div className="h-screen flex"><LoadingSpinner className="w-20 h-20 m-auto" /></div>}><Dashboard /></Suspense>} />
        </Route>
        {/* Not found Route */}
        <Route path='*' element={<NotFound />} />
    </Route>

))

const Index = () => {
    return <RouterProvider router={router} />
}

export default Index;