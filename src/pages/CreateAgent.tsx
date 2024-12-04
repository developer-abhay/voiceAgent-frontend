import { useState } from "react"
import { ArrowLeft, Bot, BrainCircuit, Mic2, Phone, Shield, Webhook, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

export default function CreateAgent() {
    const [identity, setIdentity] = useState(`Given a conversation detail in a message, output the outcome as follows:\n1. If customer asked to reschedule the call, output should be \"Rescheduled Call - <Replace this with Rescheduled time from the customer conversation>\",\n2. If customer updated his address during the call, output should be \"Updated Address - <Replace this with Updated address from the customer conversation>\"\n3. If customer cancelled his order, output should be \"Order cancelled - <Replace this with Order cancellation reason from the customer conversation>`)
    const [testMessage, setTestMessage] = useState("")
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "Namaste! I am shruti calling from the hatke?"
        }
    ])

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault()
        if (!testMessage.trim()) return

        setMessages(prev => [...prev, { role: "user", content: testMessage }])
        setTestMessage("")
        // Here you would typically make an API call to get the agent's response
        // For demo purposes, we'll just add a mock response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: "assistant",
                content: "I understand. Let me help you with that. Could you confirm your address?"
            }])
        }, 1000)
    }

    return (
        <div className="flex min-h-screen flex-col">
            {/* Header section remains unchanged */}
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6">
                <Link to="/dashboard" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back</span>
                </Link>
                <div className="flex-1">
                    <h1 className="text-lg font-semibold">Healthcare Check-In (Single Prompt)</h1>
                    <p className="text-sm text-muted-foreground">
                        Single prompt • Agent ID: agen_3ee • $0.12/min • Estimated Latency: 1100-1250ms
                    </p>
                </div>
                <Button>Save Changes</Button>
            </header>

            <div className="grid flex-1 gap-10 p-4 md:grid-cols-[1fr_450px_450px] md:p-6">
                {/* Left column  */}
                <div className="space-y-4">
                    {/* Model, Voice, Language selectors remain unchanged */}
                    <div className="flex gap-4">
                        <Select defaultValue="gpt4">
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select Model" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="gpt4">GPT 4.0</SelectItem>
                                <SelectItem value="gpt3">GPT 3.5</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select defaultValue="kate">
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select Voice" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="kate">Kate</SelectItem>
                                <SelectItem value="john">John</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select defaultValue="english">
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select Language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="english">English</SelectItem>
                                <SelectItem value="spanish">Spanish</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Identity section remains unchanged */}
                    <div className="rounded-lg border bg-card">
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">Identity</h2>
                            <Textarea
                                className="mt-2 min-h-[200px]"
                                placeholder="Enter agent identity..."
                                value={identity}
                                onChange={(e) => setIdentity(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Welcome Message section remains unchanged */}
                    <div className="rounded-lg border bg-card">
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">Welcome Message</h2>
                            <div className="mt-4 space-y-4">
                                <div className="rounded border p-4">
                                    <h3 className="font-medium">AI Initiates: AI begins with a dynamic begin message.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Center column  */}
                <div className="space-y-4">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="functions">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2">
                                    <BrainCircuit className="h-4 w-4" />
                                    Functions
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                Configure agent functions and capabilities.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="knowledge">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2">
                                    <Bot className="h-4 w-4" />
                                    Knowledge Base
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                Manage agent knowledge and responses.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="speech">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2">
                                    <Mic2 className="h-4 w-4" />
                                    Speech Settings
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                Configure voice and speech parameters.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="call">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2">
                                    <Phone className="h-4 w-4" />
                                    Call Settings
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                Manage call handling and routing.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="security">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2">
                                    <Shield className="h-4 w-4" />
                                    Security Settings
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                Configure security and access controls.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="webhook">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2">
                                    <Webhook className="h-4 w-4" />
                                    Webhook Settings
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                Set up and manage webhooks.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                {/* Right column */}
                <div className="space-y-4">
                    {/* Accordion sections remain unchanged */}
                    <Accordion type="single" collapsible className="w-full">
                        {/* Previous accordion items remain unchanged */}
                    </Accordion>

                    {/* Updated Test section with tabs */}
                    <div className="rounded-lg border bg-card">
                        <div className="p-4">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold">Test your agent</h2>
                            </div>
                            <div className="mt-4">
                                <div className="space-y-4">
                                    <div className="h-[300px] overflow-y-auto space-y-4 p-4 rounded-lg border bg-muted">
                                        {messages.map((message, index) => (
                                            <div
                                                key={index}
                                                className={`flex ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                                            >
                                                <div
                                                    className={`rounded-lg px-4 py-2 max-w-[80%] ${message.role === 'assistant'
                                                        ? 'bg-primary text-primary-foreground'
                                                        : 'bg-muted-foreground/10'
                                                        }`}
                                                >
                                                    {message.content}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <form onSubmit={handleSendMessage} className="flex gap-2">
                                        <Input
                                            placeholder="Type your message here..."
                                            value={testMessage}
                                            onChange={(e) => setTestMessage(e.target.value)}
                                        />
                                        <Button type="submit">Send</Button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}