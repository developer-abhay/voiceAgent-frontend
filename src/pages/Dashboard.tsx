import { useState } from "react"
import { MoreVertical, Plus, Bot, Book, Phone, History, CreditCard, Key, Webhook, HelpCircle } from "lucide-react"
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
import { Link, useNavigate } from "react-router-dom"
import { Agent } from '@/interfaces/Dashboard'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"


interface TemplateOption {
    id: string
    title: string
    description: string
    icon: JSX.Element
}

const templateOptions: TemplateOption[] = [
    {
        id: "blank",
        title: "Start from blank",
        description: "",
        icon: <Plus className="h-8 w-8 text-muted-foreground" />
    },
    {
        id: "healthcare",
        title: "Healthcare Check-In",
        description: "Ask questions to gather information, can transfer call.",
        icon: <Phone className="h-8 w-8 text-muted-foreground" />
    },
    {
        id: "notification",
        title: "Notification",
        description: "After giving the notification, end the call.",
        icon: <Phone className="h-8 w-8 text-muted-foreground" />
    }
]

export default function Dashboard() {
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
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
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
                            <Link
                                className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-accent-foreground transition-all hover:text-accent-foreground"
                                to="#"
                            >
                                <Bot className="h-4 w-4" />
                                Agents
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-accent-foreground"
                                to="#"
                            >
                                <Book className="h-4 w-4" />
                                Knowledge Base
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-accent-foreground"
                                to="#"
                            >
                                <Phone className="h-4 w-4" />
                                Phone Numbers
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-accent-foreground"
                                to="#"
                            >
                                <History className="h-4 w-4" />
                                Call History
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-accent-foreground"
                                to="#"
                            >
                                <CreditCard className="h-4 w-4" />
                                Billing
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-accent-foreground"
                                to="#"
                            >
                                <Key className="h-4 w-4" />
                                API Keys
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-accent-foreground"
                                to="#"
                            >
                                <Webhook className="h-4 w-4" />
                                Webhooks
                            </Link>
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
                                    navigate('/create-agent')
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