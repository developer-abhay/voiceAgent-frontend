import CallLogs from "@/components/dashboard/CallLogs";
import CallRecording from "@/components/dashboard/CallRecording";
import Sidebar from "@/components/dashboard/Sidebar";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import AgentsList from "@/components/dashboard/AgentsList";

export default function Dashboard() {
    return (
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
            {/* SideBar  */}
            <Sidebar />

            {/* Components */}
            <Routes>
                <Route path='/' element={<AgentsList />} />
                <Route path='/call-logs' element={<CallLogs />} />
                <Route path='/call-recordings' element={<CallRecording />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

        </div >
    )
}