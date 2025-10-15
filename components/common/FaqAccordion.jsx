// components/FaqAccordion.jsx

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusCircle } from "lucide-react";

// The component accepts a 'data' prop, which is our array of FAQs
export function FaqAccordion({ data }) {
  if (!data || data.length === 0) {
    return null; // Don't render anything if there's no data
  }

  return (
    <Accordion type="single" collapsible className="w-full space-y-3">
      {data.map((faqItem) => (
        <AccordionItem
          key={faqItem.id ?? faqItem.question}
          value={faqItem.id ?? faqItem.question}
          className="bg-white/5 border border-copper/30 rounded-lg px-2"
        >
          {/* We wrap the trigger in a 'group' to control the icon's state */}
          <AccordionTrigger className="text-left hover:no-underline p-4 group">
            <span className="flex-1 font-semibold text-ivory">
              {faqItem.question}
            </span>
            {/* The icon rotates 45 degrees when the accordion is open */}
            {/* <PlusCircle className="h-6 w-6 text-highlight flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45" /> */}
          </AccordionTrigger>
          <AccordionContent className="pb-4 px-4 text-bsilver">
            {faqItem.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}