import { useState } from "react"
import { MoreVertical, Plus, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useNavigate } from "react-router-dom"
import { Agent } from '@/interfaces/Dashboard'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"


interface TemplateOption {
    id: string
    title: string
    description: string
    icon: JSX.Element
    route: string
}

const templateOptions: TemplateOption[] = [
    {
        id: "blank",
        title: "Start from blank",
        description: "",
        icon: <Plus className="h-8 w-8 text-muted-foreground" />,
        route: '/agents'
    },
    {
        id: "sell",
        title: "Sell and Promotion",
        description: "Promote products, persuade clients into buying stuff.",
        icon: <Phone className="h-8 w-8 text-muted-foreground" />,
        route: '/agents/1'
    },
    {
        id: "healthcare",
        title: "Healthcare Check-In",
        description: "Ask questions to gather information, can transfer call.",
        icon: <Phone className="h-8 w-8 text-muted-foreground" />,
        route: '/agents/2'
    },
    {
        id: "notification",
        title: "Notification",
        description: "After giving the notification, end the call.",
        icon: <Phone className="h-8 w-8 text-muted-foreground" />,
        route: '/agents/3'
    },
    {
        id: "survey",
        title: "Takes Survey",
        description: "Collects data on different topics and usecases.",
        icon: <Phone className="h-8 w-8 text-muted-foreground" />,
        route: '/agents/4'
    },
    {
        id: "support",
        title: "Customer service and support",
        description: "Can resolve user queries and Provide any necessary information.",
        icon: <Phone className="h-8 w-8 text-muted-foreground" />,
        route: '/agents/5'
    },
]

const AgentsList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useNavigate()


    const [agents] = useState<Agent[]>([
        {
            id: "1",
            name: "Single-Prompt Agent",
            type: "Single Prompt",
            voice: "Myra",
            phone: "-",
            editedBy: "Myra",
            editedAt: "10/08/2024, 23:14"
        },
        {
            id: "2",
            name: "Single-Prompt Agent",
            type: "Single Prompt",
            voice: "Myra",
            phone: "-",
            editedBy: "Myra",
            editedAt: "10/08/2024, 23:14"
        }
    ])

    return (
        <div>
            {/* Main Dashboard */}
            <div className="flex flex-col">
                <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6">
                    <div className="w-full flex-1">
                        <h1 className="text-lg font-semibold">Agents</h1>
                    </div>
                    <Button onClick={() => setIsModalOpen(true)}>
                        <Plus className="mr-2 h-4 w-4" />
                        Create an Agent
                    </Button>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <div className="border shadow-sm rounded-lg">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[300px]">Agent Name</TableHead>
                                    <TableHead>Agent Type</TableHead>
                                    <TableHead>Voice</TableHead>
                                    <TableHead>Phone</TableHead>
                                    <TableHead>Edited by</TableHead>
                                    <TableHead className="text-right"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {agents.map((agent) => (
                                    <TableRow key={agent.id}>
                                        <TableCell className="font-medium">{agent.name}</TableCell>
                                        <TableCell>{agent.type}</TableCell>
                                        <TableCell>{agent.voice}</TableCell>
                                        <TableCell>{agent.phone}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <img
                                                    alt="Avatar"
                                                    className="rounded-full"
                                                    height="24"
                                                    src="/placeholder.svg"
                                                    style={{
                                                        aspectRatio: "24/24",
                                                        objectFit: "cover",
                                                    }}
                                                    width="24"
                                                />
                                                <span>{agent.editedBy}</span>
                                                <span className="text-muted-foreground">{agent.editedAt}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button size="icon" variant="ghost">
                                                        <MoreVertical className="h-4 w-4" />
                                                        <span className="sr-only">Open menu</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </main>
            </div>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="sm:max-w-[800px]">
                    <DialogHeader>
                        <DialogTitle>Select Template</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 md:grid-cols-3">
                        {templateOptions.map((template) => (
                            <button
                                key={template.id}
                                className="flex flex-col items-center rounded-lg border p-4 text-center hover:bg-muted/50"
                                onClick={() => {
                                    if (template.id === 'blank') {
                                        navigate(`${template.route}/${Math.ceil(Math.random() * 99999)}`)
                                    } else {
                                        navigate(template.route)
                                    }
                                    setIsModalOpen(false)
                                }}
                            >
                                <div className="mb-4 rounded-full bg-muted p-6">
                                    {template.icon}
                                </div>
                                <h3 className="mb-2 font-semibold">{template.title}</h3>
                                {template.description && (
                                    <p className="text-sm text-muted-foreground">{template.description}</p>
                                )}
                            </button>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>


        </div>
    )
}

export default AgentsList
