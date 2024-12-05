import { pricingTiers } from "@/data/dataUI"
import { Badge } from "../ui/badge"
import { Card, CardContent, CardHeader } from "../ui/card"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "../ui/button"

const Pricing = () => {
    return (
        <section className="container mx-auto px-4 py-24 ">
            <div className="grid md:grid-cols-3 gap-8 max-w-[80%] mx-auto">
                {pricingTiers.map((tier) => (
                    <Card key={tier.name} className={` border-2 border-gray-300 ${tier.highlight ? 'ring-2 ring-blue-600' : ''}`}>
                        <CardHeader>
                            <Badge className="w-fit mb-4 bg-blue-600 text-white">{tier.badge}</Badge>
                            <div className="mb-4">
                                <p className="text-sm text-gray-600">{tier.subtitle}</p>
                                <div className="flex items-baseline mt-2">
                                    <span className="text-2xl">₹</span>
                                    <span className="text-5xl font-bold">{tier.price}</span>
                                    <span className="text-gray-600">{tier.interval}</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-2">Cancel anytime</p>
                            </div>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                Buy Now <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div>
                                    <p className="font-medium mb-2">Included in your plan:</p>
                                    <ul className="space-y-2">
                                        {tier.features.basic.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2">
                                                <Check className="w-4 h-4 text-blue-600" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* <div>
                                    <p className="font-medium mb-2">Basic AI voice agents</p>
                                    <ul className="space-y-2">
                                        {tier.features.aiVoice.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2">
                                                <Check className="w-4 h-4 text-blue-600" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div> */}
                                {/* <div>
                                    <p className="font-medium mb-2">AI Audio Intelligence</p>
                                    <ul className="space-y-2">
                                        {tier.features.aiAudio.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2">
                                                <Check className="w-4 h-4 text-blue-600" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div> */}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default Pricing
