import Image from "next/image";

interface TestimonialProps {
  text: string;
  name: string;
  profession: string;
}

export const Testimonial = ({ text, name, profession }: TestimonialProps) => {
  return (
    <div className="p-2.5 border-1 border-foreground relative mb-6">
      <div className="w-3 h-3 rounded-full bg-foreground absolute top-[-7] left-[-7]"></div>
      <div className="w-3 h-3 rounded-full bg-foreground absolute top-[-7] right-[-7]"></div>
      <div className="w-3 h-3 rounded-full bg-foreground absolute bottom-[-7] left-[-7]"></div>
      <div className="w-3 h-3 rounded-full bg-foreground absolute bottom-[-7] right-[-7]"></div>
      <Image src="quotes.svg" width="13" height="11" alt="quotation-marks" className="mb-2.5" />
      <p className="font-sen text-xxs p-1 mb-2.5">{text}</p>
      <div className="flex items-center">
        <Image src="placeholder.svg" width="32" height="32" alt="user" className="rounded-full mr-1.5" />
        <div>
          <p className="font-sen text-xxs font-bold text-[#686868]">{name}</p>
          <p className="font-sen text-xxs text-[#494949]">{profession}</p>
        </div>
      </div>
    </div>
  );
};
