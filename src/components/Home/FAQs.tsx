import { faqs } from "@/data/data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

const FAQs = () => {
    return (
        <section className="container mx-auto px-4 py-24">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg">
                            <AccordionTrigger className="text-left px-6 py-4 hover:bg-gray-50">{faq.question}</AccordionTrigger>
                            <AccordionContent className="px-6 py-4 text-gray-600">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

export default FAQs
