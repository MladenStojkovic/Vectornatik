import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container px-6 mb-2.5">
        <p className="py-2.5 text-center uppercase bg-[#3F3F3F] text-white font-sen text-xl mb-3">
          LET’S WORK TOGETHER
        </p>
        <div className="bg-primary p-4 font-sen text-base text-white relative border-2 border-foreground mb-9">
          <div className="w-3 h-3 rounded-full bg-foreground absolute top-[-7] left-[-7]"></div>
          <div className="w-3 h-3 rounded-full bg-foreground absolute top-[-7] right-[-7]"></div>
          <div className="w-3 h-3 rounded-full bg-foreground absolute bottom-[-7] left-[-7]"></div>
          <div className="w-3 h-3 rounded-full bg-foreground absolute bottom-[-7] right-[-7]"></div>
          <p>Get in touch</p>
          <p>vectornatic.rs</p>
        </div>
        <div className="flex justify-between mb-9">
          <Link
            href="#"
            className="inline-flex items-middle justify-center border-1 border-foreground relative w-25 h-25"
          >
            <div className="w-3 h-3 rounded-full bg-foreground absolute top-[-7] left-[-7]"></div>
            <div className="w-3 h-3 rounded-full bg-foreground absolute top-[-7] right-[-7]"></div>
            <div className="w-3 h-3 rounded-full bg-foreground absolute bottom-[-7] left-[-7]"></div>
            <div className="w-3 h-3 rounded-full bg-foreground absolute bottom-[-7] right-[-7]"></div>
            <Image src="instagram.svg" width="23" height="23" alt="instagram" />
          </Link>
          <Link
            href="#"
            className="inline-flex items-middle justify-center border-1 border-foreground relative w-25 h-25"
          >
            <div className="w-3 h-3 rounded-full bg-foreground absolute top-[-7] left-[-7]"></div>
            <div className="w-3 h-3 rounded-full bg-foreground absolute top-[-7] right-[-7]"></div>
            <div className="w-3 h-3 rounded-full bg-foreground absolute bottom-[-7] left-[-7]"></div>
            <div className="w-3 h-3 rounded-full bg-foreground absolute bottom-[-7] right-[-7]"></div>
            <Image src="linkedin.svg" width="23" height="23" alt="instagram" />
          </Link>
          <Link
            href="#"
            className="inline-flex items-middle justify-center border-1 border-foreground relative w-25 h-25"
          >
            <div className="w-3 h-3 rounded-full bg-foreground absolute top-[-7] left-[-7]"></div>
            <div className="w-3 h-3 rounded-full bg-foreground absolute top-[-7] right-[-7]"></div>
            <div className="w-3 h-3 rounded-full bg-foreground absolute bottom-[-7] left-[-7]"></div>
            <div className="w-3 h-3 rounded-full bg-foreground absolute bottom-[-7] right-[-7]"></div>
            <Image src="facebook.svg" width="14" height="23" alt="instagram" />
          </Link>
        </div>
        <Image src="rocket.svg" width="124" height="192" alt="rocket" className="mx-auto"/>
      </div>
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
