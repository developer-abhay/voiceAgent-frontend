import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import DemoCall from "@/components/Home/DemoCall"
import Footer from "@/components/Home/Footer"
import Header from "@/components/layout/Header"
import { Card, CardContent } from "@/components/ui/card"
import Pricing from "@/components/Home/Pricing"
import FAQs from "@/components/Home/FAQs"
import { WavyBackground } from "@/components/ui/wavy-background"
import { companyLogos } from "@/data/data"

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Navigation */}
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="h-[calc(65vh-4rem)] w-full py-6 md:py-12 lg:py-18 xl:py-24">
                    <div className="flex flex-col space-y-4 text-center  overflow-hidden">
                        <WavyBackground className="mx-auto" backgroundFill="white">
                            <div className="space-y-2 ">
                                <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors">
                                    NEW
                                </Badge>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Supercharge your <br />
                                    <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                                        {" "}Call Operations{" "}
                                    </span>
                                    with AI voice agents
                                </h1>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                    Create artificial intelligence powered, human-like AI voice agents ready to handle your phone calls 24/7,
                                    in 60 seconds or less.
                                </p>
                            </div>
                            <div className="space-x-4 mt-5">
                                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600">
                                    Try for free
                                </Button>
                                <Button size="lg" variant="outline">
                                    Contact Sales
                                </Button>
                            </div>
                        </WavyBackground>
                    </div>
                </section>

                {/* Trusted By Section */}
                <section className="w-full h-[35vh] py-4 md:py-8 lg:py-12 flex justify-center">
                    <div className="container mx-auto px-4 max-w-[70%]">
                        <p className="text-center text-lg text-gray-500 mb-8">TRUSTED BY</p>
                        <div className="grid grid-cols-6 place-content-center gap-5 flex-wrap justify-center items-center">
                            {companyLogos.map((logo, index) => (
                                <img key={index} src={logo} alt={'Company-logo'} className="opacity-70 h-6 " />
                            ))}

                        </div>
                    </div>
                </section>

                {/* Get a Demo Call */}
                <DemoCall />



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


                {/* Testimonials */}
                <section className="bg-gray-100 py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">What our customers say about us...</h2>
                        <Card className="max-w-2xl mx-auto">
                            <CardContent className="p-6">
                                <p className="text-lg mb-4">"The previous IVR handled about 15% of calls. After releasing the AI Voice Agent, it is now handling over 50% of calls."</p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                                    <div>
                                        <p className="font-semibold">Josh Andrews</p>
                                        <p className="text-sm text-gray-600">CTO at Spare</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Pricing */}
                <Pricing />

                {/* Security */}
                <section className="container mx-auto px-4 py-12 text-center">
                    <h2 className="text-3xl font-bold mb-8">Scale with Enterprise-grade Security</h2>
                    <div className="flex justify-center space-x-4 mb-8">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="text-blue-600 w-8 h-8" />
                        </div>
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="text-blue-600 w-8 h-8" />
                        </div>
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="text-blue-600 w-8 h-8" />
                        </div>
                    </div>
                    <Button size="lg">Get Free Credits <ArrowRight className="ml-2" /></Button>
                </section>

                {/* News */}
                <section className="container mx-auto px-4 py-12">
                    <h2 className="text-3xl font-bold mb-8">News</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "$4.6M SEED", description: "Resell AI Seed Round Announcement" },
                            { title: "TC+ Feature", description: "Resell AI in companies build voice agents to answer phone calls" },
                            { title: "Tech Crunch", description: "Call Centers Embrace AI for Faster Service, Lower Costs" },
                            { title: "VentureBeat", description: "Resell AI Launches With Reactive Conversational AI Technology" }
                        ].map((news, index) => (
                            <Card key={index}>
                                <CardContent className="p-4">
                                    <h3 className="font-semibold mb-2">{news.title}</h3>
                                    <p className="text-sm text-gray-600">{news.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <FAQs />

            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}