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
      <div className="flex flex-col items-center shadow-lg rounded-lg overflow-hidden">
        <div className="w-full">
          <Image
            src={imageSrc}
            alt={alt}
            width={400}
            height={200}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full p-4 flex flex-col items-start justify-evenly bg-zinc-900">
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
