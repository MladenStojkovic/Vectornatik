import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto px-6">
      <h2 className="text-6xl text-center uppercase mb-5">
        We are a product design team from Serbia.
      </h2>
      <section className="mb-25">
        <Image
          src="separator.svg"
          alt="separator"
          width="112"
          height="4"
          className="mx-auto mb-2.5"
        />
        <h3 className="text-center font-roboto px-2.5 mb-5">
          Based in Niš, Serbia, we transform your ideas into visual
          masterpieces, Partner with us for creative solutions that make your
          brand stand out.
        </h3>
        <Button label="Make a call" className="mb-2.5" />
        <Button
          label="Explore our services"
          className="mb-2.5"
          variant="secondary"
        />
      </section>
      <section>
        <div className="relative mb-5 w-36 h-6 mx-auto">
          <Image
            src="splash.svg"
            alt="Background Image"
            fill
            className="absolute top-0 left-0 z-[-1]"
          />
          <h4 className="text-white text-center font-roboto text-xs uppercase absolute top-5/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            Who we are?
          </h4>
        </div>
        <h3 className="text-center px-2.5 mb-5 uppercase text-2xl">
          We’re a designers from Serbia with a passion for pixels.
        </h3>
      </section>
    </main>
  );
}
