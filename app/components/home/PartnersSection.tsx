"use client";
import Heading from "../ui/Heading";
import Link from "next/link";
import Image from "next/image";

export default function PartnersSection() {
  const partners = [
    { src: "/vercel.svg", alt: "Partner 1", href: "" },
    { src: "/vercel.svg", alt: "Partner 2", href: "" },
    { src: "/vercel.svg", alt: "Partner 3", href: "" },
    { src: "/vercel.svg", alt: "Partner 4", href: "" },
  ];

  // Duplicate the array for seamless looping
  const logos = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="h-60 w-full flex flex-col items-center overflow-hidden">
      <h1 className="text-md text-zinc-400 mb-6">In Partnership With</h1>
      <div className="relative w-full overflow-hidden">
        <div className="carousel-track space-x-10 py-4">
          {logos.map((partner, i) => (
            <Link key={i} href={partner.href || "#"} className="shrink-0">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={80}
                height={80}
                className="h-20 w-20 object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
