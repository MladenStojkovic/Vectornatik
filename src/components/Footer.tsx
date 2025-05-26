import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FooterProps {
  hideContact?: boolean;
}

const Footer: React.FC<FooterProps> = ({ hideContact = false }) => {
  return (
    <footer>
      <div className={`container px-6 mb-2.5 md:mb-[100] mx-auto md:px-16 md:flex items-end ${hideContact ? 'justify-center' : 'justify-between'}`}>
        {!hideContact && (
          <div>
            <p className="py-2.5 font-extrabold text-center uppercase bg-[#3F3F3F] text-white font-sen text-2xl mb-3 sm:text-xl px-4 lg:px-[50]">
              LET&apos;S WORK TOGETHER
            </p>
            <div className="bg-primary p-4 font-sen text-base text-white relative border-2 border-foreground mb-9 md:mb-0">
              <div className="w-3 h-3 rounded-full bg-foreground absolute top-[-7] left-[-7]"></div>
              <div className="w-3 h-3 rounded-full bg-foreground absolute top-[-7] right-[-7]"></div>
              <div className="w-3 h-3 rounded-full bg-foreground absolute bottom-[-7] left-[-7]"></div>
              <div className="w-3 h-3 rounded-full bg-foreground absolute bottom-[-7] right-[-7]"></div>
              <p>Get in touch</p>
              <p>vectornatic.rs</p>
            </div>
          </div>
        )}
        <div className="grid grid-cols-3 gap-4 mb-9 sm:mb-0 min-w-[366] md:min-w-[320] lg:min-w-[366] items-end">
          {["instagram.svg", "linkedin.svg", "facebook.svg"].map(
            (icon, index) => (
              <Link
                key={index}
                href="#"
                className="relative border-2 border-foreground flex items-center justify-center aspect-square group"
              >
                <div className="w-3 h-3 rounded-full bg-foreground absolute top-[-7px] left-[-7px]"></div>
                <div className="w-3 h-3 rounded-full bg-foreground absolute top-[-7px] right-[-7px]"></div>
                <div className="w-3 h-3 rounded-full bg-foreground absolute bottom-[-7px] left-[-7px]"></div>
                <div className="w-3 h-3 rounded-full bg-foreground absolute bottom-[-7px] right-[-7px]"></div>
                <Image
                  src={icon}
                  width={icon === "facebook.svg" ? 14 : 23}
                  height={23}
                  alt={icon.replace(".svg", "")}
                  className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </Link>
            )
          )}
        </div>
      </div>
      <Image
        src="rocket.svg"
        width="124"
        height="192"
        alt="rocket"
        className="mx-auto mb-2 md:mb-[100]"
      />
      <div className="border-t-1 border-foreground">
        <div className="container mx-auto px-6 text-center text-xxs font-sen text-[#646464]">
          <div className="border-l-2 border-r-2 py-6 relative border-foreground">
            <div className="w-3 h-3 rounded-full bg-foreground absolute top-[-7] left-[-7]"></div>
            <div className="w-3 h-3 rounded-full bg-foreground absolute top-[-7] right-[-7]"></div>
            <p>
              Copyright @ {new Date().getFullYear()} VECTORNATIC design studio -
              All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
