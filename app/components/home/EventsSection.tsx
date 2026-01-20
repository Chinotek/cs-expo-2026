import Image from "next/image";
import Link from "next/link";
import React from "react";
import Section from "../ui/Section";
import Heading from "../ui/Heading";

export default function EventsSection() {
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
