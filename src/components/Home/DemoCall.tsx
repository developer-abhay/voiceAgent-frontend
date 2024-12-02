import { CalendarDays, ClipboardCheck, HeadphonesIcon, MessageSquareText, UserRound, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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

export default function DemoCall() {
    return (
        <section className=" mx-auto px-4 py-12 bg-blue-50">
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
                            cards.map(({ title, icon }) => (
                                <Card className="p-4 flex justify-center items-center">
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
