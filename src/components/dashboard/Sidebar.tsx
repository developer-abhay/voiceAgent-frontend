import { Bot, Book, Phone, History, CreditCard, Key, Webhook, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link, NavLink } from "react-router-dom"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const menu = {
    menu1: [
        {
            route: '',
            title: "Agents",
            icon: <Bot className="h-4 w-4" />
        },
        {
            route: '',
            title: "KnowledgeBase",
            icon: <Book className="h-4 w-4" />
        },
        {
            route: '',
            title: "Phone Numbers",
            icon: <Phone className="h-4 w-4" />
        }
    ],
    menu2: [
        {
            route: '',
            title: "Billing",
            icon: <CreditCard className="h-4 w-4" />
        },
        {
            route: '',
            title: "Api Keys",
            icon: <Key className="h-4 w-4" />
        },
        {
            route: '',
            title: "Webhooks",
            icon: <Webhook className="h-4 w-4" />
        },
    ]
}


const Sidebar = () => {
    return (
        <div className="hidden border-r bg-muted/40 lg:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-[60px] items-center border-b px-6">
                    <Link className="flex items-center gap-2 font-semibold" to="#">
                        <Bot className="h-6 w-6" />
                        <span>HelloGenAI</span>
                    </Link>
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
                        <Accordion type="single" collapsible className="w-full px-3">
                            <AccordionItem value="functions">
                                <AccordionTrigger>
                                    <div className="flex items-center gap-3 rounded-lg text-muted-foreground transition-all hover:text-accent-foreground">
                                        <History className="h-4 w-4" />
                                        Call History
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <Link
                                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-accent-foreground"
                                        to="call-logs"
                                    >
                                        <History className="h-4 w-4" />
                                        Call Logs
                                    </Link>
                                    <Link
                                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-accent-foreground"
                                        to="call-recordings"
                                    >
                                        <History className="h-4 w-4" />
                                        Call Recordings
                                    </Link>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        {menu.menu2.map((item, index) =>
                            <Link
                                key={index}
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-accent-foreground"
                                to={item.route}
                            >
                                {item.icon}
                                {item.title}
                            </Link>
                        )}

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