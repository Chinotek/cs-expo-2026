"use client";
import Image from "next/image";
import Section from "./components/ui/Section";
import Heading from "./components/ui/Heading";
import Link from "next/link";
import { useEffect, useRef } from "react";

//TODO: Move server components to /components folder

//Hero Section
function Hero() {
  return (
    <Section className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-extrabold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent lg:text-6xl">
          CS Expo 2026
        </h1>
        <p className="w-3/4 text-center text-purple-300 text-base lg:text-lg">
          The Expo for Developers.
        </p>
      </div>
    </Section>
  );
}

//Partners Section (Custom Height)
function Partners() {
  // sample partners – replace with real data
  const partners = [
    { src: "/vercel.svg", alt: "Partner 1", href: "" },
    { src: "/vercel.svg", alt: "Partner 2", href: "" },
    { src: "/vercel.svg", alt: "Partner 3", href: "" },
    { src: "/vercel.svg", alt: "Partner 4", href: "" },
    { src: "/vercel.svg", alt: "Partner 1", href: "" },
    { src: "/vercel.svg", alt: "Partner 2", href: "" },
    { src: "/vercel.svg", alt: "Partner 3", href: "" },
    { src: "/vercel.svg", alt: "Partner 4", href: "" },
  ];

  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    let frameId: number;
    let userInteracting = false;
    let userTimeout: ReturnType<typeof setTimeout> | null = null;

    const step = () => {
      const node = carouselRef.current;
      if (!node) return;

      if (!userInteracting) {
        // auto scroll to the right
        node.scrollLeft += 50;

        // loop back to start when reaching end
        if (node.scrollLeft + node.clientWidth >= node.scrollWidth - 1) {
          node.scrollLeft = 0;
        }
      }
      frameId = requestAnimationFrame(step);
    };

    const onUserScroll = () => {
      userInteracting = true;
      if (userTimeout) clearTimeout(userTimeout);
      userTimeout = setTimeout(() => {
        userInteracting = false;
      }, 1500); // resume auto-scroll after 1.5s of no scrolling
    };

    el.addEventListener("scroll", onUserScroll);
    frameId = requestAnimationFrame(step); // start the loop

    return () => {
      el.removeEventListener("scroll", onUserScroll);
      cancelAnimationFrame(frameId);
      if (userTimeout) clearTimeout(userTimeout);
    };
  }, []);

  return (
    <section className="h-60 w-full flex flex-col items-center">
      <Heading title="Partners" className="mb-6" />
      <div
        ref={carouselRef}
        className="h-1/2 w-full flex items-center overflow-x-auto space-x-10 lg:justify-center"
        style={{ scrollBehavior: "smooth" }}
      >
        {partners.map((partner, i) => (
          <Link key={i} href={partner.href || "#"} className="shrink-0">
            <Image
              src={partner.src}
              alt={partner.alt}
              width={80}
              height={80}
              className="h-20 w-20 object-contain bg-amber-50"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

//Events Section
function Events() {
  function EventCard({
    imageSrc,
    alt,
    title,
    description,
    href,
  }: {
    imageSrc: string;
    alt: string;
    title: string;
    description: string;
    href: string;
  }) {
    return (
      <div className="h-90 flex flex-col items-center shadow-lg">
        <div className="h-1/2">
          <Image
            src={imageSrc}
            alt={alt}
            width={400}
            height={200}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
        <div className="h-1/2 p-4 flex flex-col items-start justify-evenly bg-zinc-900 rounded-b-lg">
          <Link
            className="text-lg font-bold hover:text-purple-300 lg:text-xl"
            href={href}
          >
            {title}
          </Link>
          <p className="text-sm text-zinc-300 lg:text-md">{description}</p>
        </div>
      </div>
    );
  }
  return (
    <Section className="flex flex-col items-center justify-center gap-4">
      <Heading title="Events" className="mb-6" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
        <EventCard
          imageSrc="/globe.svg"
          alt="Sample Event 1"
          title="AI Workshop"
          href="/"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, recusandae."
        />
        <EventCard
          imageSrc="/globe.svg"
          alt="Sample Event 2"
          title="AI Workshop"
          href="/"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, recusandae."
        />
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col gap-6">
      <Hero />
      <Partners />
      <Events />
    </main>
  );
}
