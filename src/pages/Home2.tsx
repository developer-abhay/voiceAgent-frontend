// import Link from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
// import { Switch } from "@/components/ui/switch"
import { Check, Globe, MessageSquare, Phone, Play } from 'lucide-react'

export default function Home2() {
    return (
        <div className="min-h-screen bg-black text-white">
            <header className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                    <span className="font-bold">voiceAI</span>
                </div>
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" className="text-white">Login</Button>
                    <Button className="bg-blue-600 hover:bg-blue-700">Sign up</Button>
                </div>
            </header>

            <main className="container mx-auto px-4">
                <section className="py-20 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Automate calls with AI phone agents that{' '}
                            <span className="text-blue-600">sound human</span>
                        </h1>
                        <p className="text-gray-400 text-lg mb-8">
                            Create artificial intelligence powered, human-like AI voice agents ready to handle your phone calls 24/7 in 10 seconds or less.
                        </p>
                        <Button className="bg-blue-600 hover:bg-blue-700 h-12 px-8">Try it free</Button>
                    </div>
                </section>

                <section className="grid md:grid-cols-2 gap-12 py-12">
                    <Card className="bg-gray-900 border-gray-800">
                        <CardContent className="p-6">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-gray-800"></div>
                                <div>
                                    <p className="font-semibold">Default Voice AI</p>
                                    <p className="text-sm text-gray-400">Powered by voiceAI</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <Input placeholder="Name" className="bg-gray-800 border-gray-700" />
                                <Input placeholder="Email" className="bg-gray-800 border-gray-700" />
                                <Input placeholder="Phone" className="bg-gray-800 border-gray-700" />
                                <Button className="w-full bg-blue-600 hover:bg-blue-700">Call me now</Button>
                            </div>
                            <p className="text-xs text-gray-500 mt-4">
                                By clicking "Call me now", you agree to our Terms of Service and Privacy Policy
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-blue-600">
                        <CardContent className="p-6">
                            <h3 className="font-semibold mb-6">Features</h3>
                            <ul className="space-y-4">
                                {[
                                    'Customize agent behavior with advanced voice technology',
                                    'Optimize the conversation path based on data insights',
                                    'Build a learning bot that gets better with each call',
                                    'Collaborate effectively with team members',
                                    'Real results, fast and easy',
                                    'Scale anything with AI'
                                ].map((feature, index) => (
                                    <li key={index} className="flex items-center space-x-3">
                                        <Check className="flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </section>

                <section className="py-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Create AI voice call agents that{' '}
                        <span className="text-blue-600">sound and behave like real people</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="relative aspect-square rounded-2xl overflow-hidden bg-gray-800">
                                <img
                                    src={`/placeholder.svg?height=300&width=300`}
                                    alt={`AI Agent ${i}`}
                                    width={300}
                                    height={300}
                                    className="object-cover"
                                />
                                <Button
                                    size="sm"
                                    className="absolute bottom-4 left-4 bg-blue-600 hover:bg-blue-700"
                                >
                                    <Play className="w-4 h-4 mr-2" /> Play
                                </Button>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-20 bg-blue-600 rounded-3xl p-12">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Configure your AI voice agent
                        </h2>
                        <Card className="bg-gray-900 border-gray-800">
                            <CardContent className="p-6 space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            placeholder="Your agent voice name"
                                            className="bg-gray-800 border-gray-700"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="language">Language</Label>
                                        <Select>
                                            <SelectTrigger className="bg-gray-800 border-gray-700">
                                                <SelectValue placeholder="English" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="en">English</SelectItem>
                                                <SelectItem value="es">Spanish</SelectItem>
                                                <SelectItem value="fr">French</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="welcome-message">Welcome message</Label>
                                    <Textarea
                                        id="welcome-message"
                                        placeholder="Type your welcome message here"
                                        className="bg-gray-800 border-gray-700"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="recording">Call recording</Label>
                                    {/* <Switch id="recording" /> */}
                                </div>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                    Save & continue
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section className="py-20">
                    <h2 className="text-3xl font-bold text-center mb-12">Integration</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <Card key={i} className="bg-gray-900 border-gray-800">
                                <CardContent className="p-4">
                                    <div className="aspect-square rounded-xl bg-gray-800 mb-4"></div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Globe className="w-4 h-4" />
                                            <span className="text-sm">Agent {i}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <MessageSquare className="w-4 h-4" />
                                            <Phone className="w-4 h-4" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="py-20">
                    <div className="grid md:grid-cols-4 gap-8 mb-12">
                        {[
                            { label: 'Daily calls', value: '500+ SMS' },
                            { label: 'Response time', value: 'Mostly real-time' },
                            { label: 'AI messages', value: 'Contextual AI based' },
                            { label: 'Satisfaction', value: '95% rating' }
                        ].map((stat, index) => (
                            <Card key={index} className="bg-gray-900 border-gray-800">
                                <CardContent className="p-4">
                                    <p className="text-gray-400">{stat.label}</p>
                                    <p className="font-semibold">{stat.value}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h3 className="font-semibold mb-2">Natural Responses</h3>
                        <p className="text-gray-400">Provide human responses</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Privacy Information</h3>
                        <p className="text-gray-400">Your data is secure with us</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Support & questions</h3>
                        <p className="text-gray-400">24/7 support available</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}