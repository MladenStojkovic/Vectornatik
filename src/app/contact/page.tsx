"use client";
import Button from "@/components/Button";

export default function Contact() {
  return (
    <section className="container px-9 mx-auto md:px-12">
      <div className="lg:max-w-[591] mx-auto">
      <h2 className="text-center text-3xl font-light leading-[100%] mt-6 mb-11 uppercase font-londrina w-full">
        Welcome
      </h2>
      <p className="font-roboto text-[#919191] mb-9">
        Get in touch if you would like to work together. Be free to ask and say
        anything.
      </p>
      <input
        className="bg-[#EFF4F5] mb-2.5 border-black w-full border-1 font-roboto p-2 text-xs"
        placeholder="Name"
      />
      <input
        className="bg-[#EFF4F5] mb-2.5 border-black w-full border-1 font-roboto p-2 text-xs"
        placeholder="Your Email"
      />
      <textarea
        className="bg-[#EFF4F5] mb-2.5 border-black w-full border-1 font-roboto p-2 text-xs h-32"
        placeholder="Message"
      />
      <Button label="Send" className="mb-9" />
      </div>
    </section>
  );
}
