import Button from "@/components/Button";
import ShowcaseCard from "@/components/ShowcaseCard";
import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/FAQ";

const FAQs = [
  {
    title: "What services do you offer?",
    description: "Lorem ipsum",
  },
  {
    title: "How does the design process work?",
    description: "Lorem ipsum",
  },
  {
    title: "What industries do you specialize in?",
    description: "Lorem ipsum",
  },
  {
    title: "How long does a typical project take?",
    description: "Lorem ipsum",
  },
  {
    title: "What is your pricing structure?",
    description: "Lorem ipsum",
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-6">
      <div className="relative mb-5 w-36 h-6 mx-auto">
          <Image
            src="splash.svg"
            alt="Background Image"
            fill
            className="absolute top-0 left-0 z-[-1]"
          />
          <h4 className="text-white text-center font-roboto text-xs uppercase absolute top-5/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            Welcome
          </h4>
        </div>
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
      <section className="mb-9">
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
        <h3 className="text-center px-2.5 mb-9 uppercase text-2xl">
          We’re a designers from Serbia with a passion for pixels.
        </h3>
        <Image
          src="people.svg"
          alt="People"
          width="200"
          height="122"
          className="mx-auto"
        />
        <p className="text-center font-roboto px-2 mt-9">
          Based in Niš, Serbia, we transform your ideas into visual
          masterpieces, Partner with us for creative solutions that make your
          brand stand out. Based in Niš, Serbia, we transform your ideas into
          visual masterpieces, Partner with us for creative solutions that make
          your brand stand out.
        </p>
      </section>
      <section className="mb-10">
        <div className="relative mb-5 w-36 h-6 mx-auto">
          <Image
            src="splash.svg"
            alt="Background Image"
            fill
            className="absolute top-0 left-0 z-[-1]"
          />
          <h4 className="text-white text-center font-roboto text-xs uppercase absolute top-5/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            Take a look
          </h4>
        </div>
        <h3 className="text-center px-2.5 mb-9 uppercase text-3xl">
          Recent work
        </h3>
        <ShowcaseCard
          title="Lorem ipsum"
          description="Branding & App"
          className="mb-5"
        />
        <ShowcaseCard
          title="Lorem ipsum"
          description="Branding & App"
          className="mb-5"
        />
        <ShowcaseCard
          title="Lorem ipsum"
          description="Branding & App"
          className="mb-5"
        />
        <ShowcaseCard
          title="Lorem ipsum"
          description="Branding & App"
          className="mb-5"
        />
        <div className="text-center">
          <Link
            href="/work"
            className="pb-1.5 border-b-primary border-b-1 text-primary inline-block"
          >
            Read more
          </Link>
        </div>
      </section>
      <section className="mb-9">
        <div className="relative mb-5 w-36 h-6 mx-auto">
          <Image
            src="splash.svg"
            alt="Background Image"
            fill
            className="absolute top-0 left-0 z-[-1]"
          />
          <h4 className="text-white text-center font-roboto text-xs uppercase absolute top-5/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            Questions
          </h4>
        </div>
        <h3 className="text-center px-2.5 mb-9 text-3xl">FAQs</h3>
        {FAQs.map((faq, index) => (
          <FAQ key={index} title={faq.title} description={faq.description} />
        ))}
      </section>
      <section className="mb-9">
        <div className="relative mb-5 w-60 h-9 mx-auto">
          <Image
            src="splash.svg"
            alt="Background Image"
            fill
            className="absolute top-0 left-0 z-[-1]"
          />
          <h4 className="text-white text-center font-roboto text-xs uppercase absolute top-5/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            What talking about us?
          </h4>
        </div>
        <h3 className="text-center px-2.5 mb-9 text-3xl uppercase">
          Testimonials
        </h3>
      </section>
    </main>
  );
}
