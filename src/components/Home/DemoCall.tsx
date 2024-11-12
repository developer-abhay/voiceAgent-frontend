import { CalendarDays, ClipboardCheck, HeadphonesIcon, MessageSquareText, UserRound, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DemoCall() {
    return (
        <div className="container mx-auto px-4 py-12 ">
            <h1 className="mb-12 text-center text-4xl font-bold">Live Demo for all Use Cases</h1>
            <div className="flex gap-10 justify-between">
                <div className="flex rounded-xl overflow-hidden w-[60%]">
                    <div className="space-y-8 bg-gray-950 p-8 text-white w-[45%]">
                        <div className="space-y-2">
                            <h2 className="text-2xl">Receive a live call from our agent</h2>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                    id="phone"
                                    placeholder="123-456-7890"
                                    className="border-gray-800 bg-gray-900 text-white"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    placeholder="John"
                                    className="border-gray-800 bg-gray-900 text-white"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@company.com"
                                    className="border-gray-800 bg-gray-900 text-white"
                                />
                            </div>

                            <Button className="w-fit mt-5 bg-white text-gray-950 hover:bg-gray-100">
                                GET A CALL
                            </Button>
                        </div>
                    </div>

                    <div className="relative h-[400px] overflow-hidden lg:h-auto w-[55%]">
                        <img
                            src="/call-center-landingpage.jpg"
                            alt="Customer service representative"
                            className="h-full w-full object-cover"
                            width={800}
                            height={600}
                        />
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-[40%]">
                    <Card className="p-6 flex justify-center items-center">
                        <div className="flex flex-col items-center">
                            <UserRound className="h-8 w-8 text-primary" />
                            <h3 className="text-lg font-semibold">Receptionist</h3>
                        </div>
                    </Card>

                    <Card className="p-6 flex justify-center items-center">
                        <div className="flex flex-col items-center justify-center text-center">
                            <CalendarDays className="h-8 w-8 text-primary" />
                            <h3 className="text-lg font-semibold">Appointment Setter</h3>
                        </div>
                    </Card>

                    <Card className="p-6 flex justify-center items-center">
                        <div className="flex flex-col items-center justify-center text-center">
                            <ClipboardCheck className="h-8 w-8 text-primary" />
                            <h3 className="text-lg font-semibold">Lead Qualification</h3>
                        </div>
                    </Card>

                    <Card className="p-6 flex justify-center items-center">
                        <div className="flex flex-col items-center justify-center text-center">
                            <MessageSquareText className="h-8 w-8 text-primary" />
                            <h3 className="text-lg font-semibold">Survey</h3>
                        </div>
                    </Card>

                    <Card className="p-6 flex justify-center items-center">
                        <div className="flex flex-col items-center justify-center text-center">
                            <HeadphonesIcon className="h-8 w-8 text-primary" />
                            <h3 className="text-lg font-semibold">Customer Service</h3>
                        </div>
                    </Card>

                    <Card className="p-6 flex justify-center items-center">
                        <div className="flex flex-col items-center justify-center text-center">
                            <Wallet className="h-8 w-8 text-primary" />
                            <h3 className="text-lg font-semibold">Debt Collection</h3>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}