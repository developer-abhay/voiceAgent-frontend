import { BatteryCharging, History, Speech } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/Home/Footer"
import Header from "@/components/layout/Header"
import { Card, CardContent } from "@/components/ui/card"
import Pricing from "@/components/Home/Pricing"
import FAQs from "@/components/Home/FAQs"
import { WavyBackground } from "@/components/ui/wavy-background"
import { companyLogos } from "@/data/data"
import { CalendarDays, ClipboardCheck, HeadphonesIcon, MessageSquareText, UserRound, Wallet } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ceoAvatar from '@/assets/ceoAvatar.png'
import { useTheme } from "@/components/darkmode/theme-provider"

const featuresSection = [
    {
        title: "Lightning Fast Setup",
        description: "Create and deploy your AI voice agents in under 60 seconds with our intuitive interface.",
        icon: <BatteryCharging color="white" size={30} />
    },
    {
        title: "24/7 Availability",
        description: "Your AI agents are always ready to handle calls, ensuring you never miss an opportunity.",
        icon: <History color="white" size={30} />
    },
    {
        title: "Human-like Interactions",
        description: "Advanced AI technology ensures natural, engaging conversations with your customers.",
        icon: <Speech color="white" size={30} />
    }
]

export default function Home() {
    const { theme } = useTheme()
    return (
        <div className="flex min-h-screen flex-col">
            {/* Navigation */}
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="h-[calc(65vh-4rem)] w-full">
                    <div className="relative flex flex-col space-y-4 text-center py-6 md:py-12 lg:py-18 xl:py-24">
                        {theme == 'light' ? <WavyBackground className="mx-auto" backgroundFill="white" speed="fast">
                            <HeroComp />
                        </WavyBackground> : <HeroComp />}
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
                    <div className="container px-4 md:px-6 max-w-[80%]">
                        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                            {featuresSection.map(({ title, description, icon }, i) => (
                                <div key={i} className="flex flex-col items-center space-y-4 text-center">
                                    <div className="flex justify-center items-center h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-violet-500" >
                                        {icon}
                                    </div>
                                    <h3 className="text-xl font-bold">{title}</h3>
                                    <p className="text-muted-foreground">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Testimonials */}
                <section className=" py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">What our customers say about us...</h2>
                        <Card className="max-w-2xl mx-auto">
                            <CardContent className="p-6">
                                <p className="text-lg mb-4">"The previous IVR handled about 15% of calls. After releasing the AI Voice Agent, it is now handling over 50% of calls."</p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4">
                                        <img src={ceoAvatar} alt="" />
                                    </div>
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

                {/* FAQ */}
                <FAQs />

            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

// Demo Call Card
const cards: { title: string, icon: React.ReactElement }[] = [{
    title: 'Receptionist',
    icon: <UserRound className="h-8 w-8 text-primary" />,
}, {
    title: 'Appointment Setter',
    icon: <CalendarDays className="h-8 w-8 text-primary" />
}, {
    title: 'Lead Qualifications',
    icon: <ClipboardCheck className="h-8 w-8 text-primary" />
}, {
    title: 'Survey',
    icon: <MessageSquareText className="h-8 w-8 text-primary" />
}, {
    title: 'Customer Service',
    icon: <HeadphonesIcon className="h-8 w-8 text-primary" />
}, {
    title: 'Debt Collection',
    icon: <Wallet className="h-8 w-8 text-primary" />
}]


function HeroComp() {
    return (<>
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
        </div></>)
}


function DemoCall() {
    return (
        <section className="mx-auto px-4 py-12 ">
            <div className="container mx-auto px-4 max-w-[85%]">

                <h1 className="mb-12 text-center text-4xl font-bold">Live Demo for all Use Cases</h1>
                <div className="flex gap-10 justify-between">
                    {/* Demo Call Card */}
                    <div className="flex rounded-xl shadow-xl overflow-hidden w-[70%]">
                        <div className="space-y-8  bg-gray-900 p-8 text-gray-950 w-[50%] shadow-2xl shadow-black rounded-l-xl">
                            <div className="space-y-2">
                                <h2 className="text-2xl text-white">Receive a live call from our agent</h2>
                            </div>

                            <form className="flex flex-col gap-5">
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-white">Phone Number</Label>
                                    <Input
                                        id="phone"
                                        required
                                        placeholder="123-456-7890"
                                        className="border-gray-800 bg-white"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-white">Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="John"
                                        required
                                        // className="border-gray-800 bg-gray-900 text-white"
                                        className="border-gray-800 bg-white"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-white">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        placeholder="john@company.com"
                                        className="border-gray-800  bg-white"
                                    />
                                </div>

                                <Button type="submit" className="w-fit mt-5 bg-white text-gray-900 hover:bg-white/90">
                                    GET A CALL
                                </Button>
                            </form>
                        </div>

                        <div className="relative h-[400px] overflow-hidden lg:h-auto w-[50%]">
                            <img
                                src="/call-center-landingpage.jpg"
                                alt="Customer service representative"
                                className="h-full w-full object-cover"
                                width={800}
                                height={600}
                            />
                        </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-2 w-[30%]">
                        {
                            cards.map(({ title, icon }, index) => (
                                <Card key={index} className="p-4 flex justify-center items-center">
                                    <div className="flex flex-col items-center justify-center text-center">
                                        {icon}
                                        <h3 className="text-lg font-semibold">{title}</h3>
                                    </div>
                                </Card>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
