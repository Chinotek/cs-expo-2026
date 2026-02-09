import React from "react";
import Section from "../ui/Section";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Section className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <Image
          src="/Expo Design Theme.png"
          alt="Logo"
          width={400}
          height={400}
          className="bg-transparent"
          style={{ backgroundColor: "transparent" }}
        />
      </div>
    </Section>
  );
}
