import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  title: string;
  description: string;
}

const FAQ = ({ title, description }: FAQProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="border-b-1 border-foreground relative text-[#1A1A1A] mx-4 px-2.5"
    >
      <AccordionItem value="item-1">
        <div className="w-1.5 h-1.5 rounded-full bg-foreground absolute bottom-[-3] left-[-3]"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-foreground absolute bottom-[-3] right-[-3]"></div>
        <AccordionTrigger className="text-xs font-sen">
          {title}
        </AccordionTrigger>
        <AccordionContent>{description}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQ;
