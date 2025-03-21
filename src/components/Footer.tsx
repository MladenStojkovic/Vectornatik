import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t-1">
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
    </footer>
  );
};

export default Footer;
