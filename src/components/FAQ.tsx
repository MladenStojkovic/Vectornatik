import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  title: string;
  description: string;
  className?: string;
}

const FAQ = ({ title, description, className = '' }: FAQProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      className={`border-b-1 border-foreground relative text-[#1A1A1A] mx-4 px-2.5 ${className}`}
    >
      <AccordionItem value="item-1">
        <div className="w-1.5 h-1.5 md:w-3 md:h-3 rounded-full bg-foreground absolute bottom-[-3] left-[-3] md:bottom-[-6] md:right-[-6]"></div>
        <div className="w-1.5 h-1.5 md:w-3 md:h-3 rounded-full bg-foreground absolute bottom-[-3] right-[-3] md:bottom-[-6] md:right-[-6]"></div>
        <AccordionTrigger className="text-xs font-sen md:text-base">
          {title}
        </AccordionTrigger>
        <AccordionContent>{description}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQ;
