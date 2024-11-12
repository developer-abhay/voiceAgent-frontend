import { Bot } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import DemoCall from "@/components/Home/DemoCall"
import Footer from "@/components/Home/Footer"

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Navigation */}
            <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
                <Link className="flex items-center gap-2 font-semibold" to="/">
                    <Bot className="h-6 w-6" />
                    <span>HelloGenAI</span>
                </Link>
                <nav className="hidden md:flex gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
                        Blog
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
                        Documentation
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
                        Pricing
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
                        Contact
                    </Link>
                </nav>
                <div className="flex gap-4">
                    <Link to="/login">
                        <Button variant="ghost">Sign In</Button>
                    </Link>
                    <Link to="/signup">
                        <Button>Sign Up NOW</Button>
                    </Link>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted flex flex-col gap-40 justify-center items-center">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors">
                                    NEW
                                </Badge>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Automate calls with AI phone agents that{" "}
                                    <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                                        drive sales
                                    </span>
                                </h1>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                    Create artificial intelligence powered, human-like AI voice agents ready to handle your phone calls 24/7,
                                    in 60 seconds or less.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600">
                                    Try for free
                                </Button>
                                <Button size="lg" variant="outline">
                                    Contact Sales
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Get a Demo Call */}
                    <DemoCall />
                </section>



                {/* Trusted By Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 flex justify-center">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <h2 className="text-xl font-medium text-muted-foreground">Trusted by innovative companies</h2>
                            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="flex items-center justify-center">
                                        <img
                                            src="/placeholder.svg"
                                            alt={`Company logo ${i}`}
                                            className="h-12 w-auto grayscale transition-all hover:grayscale-0"
                                            width={200}
                                            height={48}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                            {[
                                {
                                    title: "Lightning Fast Setup",
                                    description: "Create and deploy your AI voice agents in under 60 seconds with our intuitive interface."
                                },
                                {
                                    title: "24/7 Availability",
                                    description: "Your AI agents are always ready to handle calls, ensuring you never miss an opportunity."
                                },
                                {
                                    title: "Human-like Interactions",
                                    description: "Advanced AI technology ensures natural, engaging conversations with your customers."
                                }
                            ].map((feature, i) => (
                                <div key={i} className="flex flex-col items-center space-y-4 text-center">
                                    <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
                                    <h3 className="text-xl font-bold">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}