import { Bot, CreditCard, Key, HelpCircle, LogOut, PhoneOutgoing, Notebook, FileAudio } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link, NavLink } from "react-router-dom"
import { ModeToggle } from "../darkmode/mode-toggle"
import { useAuthContext } from "@/context/AuthContext"

const menu = {
    menu1: [
        {
            route: '',
            title: "Agents",
            icon: <Bot className="h-4 w-4" />
        },
        {
            route: 'make-calls',
            title: "Make Calls",
            icon: <PhoneOutgoing className="h-4 w-4" />
        },
        {
            route: 'call-logs',
            title: "Call Logs",
            icon: <Notebook className="h-4 w-4" />
        },
        {
            route: 'call-recordings',
            title: "Call Recordings",
            icon: <FileAudio className="h-4 w-4" />
        },
        {
            route: 'billing',
            title: "Billing",
            icon: <CreditCard className="h-4 w-4" />
        },
        {
            route: 'api-keys',
            title: "Api Keys",
            icon: <Key className="h-4 w-4" />
        },
    ]
}


const Sidebar = () => {
    const { logout } = useAuthContext()
    return (
        <div className="hidden border-r bg-muted/40 lg:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex justify-between h-[60px] items-center border-b px-6">
                    <Link className="flex items-center gap-2 font-semibold" to="/">
                        <Bot className="h-6 w-6" />
                        <span>HelloGenAI</span>
                    </Link>
                    <ModeToggle />
                </div>
                <div className="flex-1 overflow-auto py-2">
                    <nav className="grid items-start px-4 text-sm font-medium">
                        {menu.menu1.map((item, index) => {
                            return <NavLink key={index} to={item.route} end
                                className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isActive ? 'bg-accent text-accent-foreground transition-all hover:text-accent-foreground' : 'text-muted-foreground transition-all hover:text-accent-foreground'
                                    }`
                                }
                            >
                                {item.icon}
                                {item.title}
                            </NavLink>
                        })}
                    </nav>
                </div>
                <div className="mt-auto p-4">
                    <div className="rounded-lg border bg-card p-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="font-semibold">Free Trial</div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="mb-2 flex items-center justify-between text-sm">
                                <div>Remaining:</div>
                                <div>60:00 minutes</div>
                            </div>
                            <div className="h-2 rounded-full bg-muted">
                                <div className="h-full w-1/2 rounded-full bg-primary" />
                            </div>
                        </div>
                        <Button className="mt-4 w-full" variant="outline">
                            Add Payment
                        </Button>
                    </div>

                </div>
                <div className="px-4">
                    <Button
                        variant="outline"
                        className="w-full justify-start"
                        onClick={() => logout()}
                    >
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                    </Button>
                </div>

                <div className="border-t p-4">
                    <Link className="flex items-center gap-2 text-sm" to="#">
                        <HelpCircle className="h-4 w-4" />
                        Help Center
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
