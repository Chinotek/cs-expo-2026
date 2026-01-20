import React from "react";
import Section from "../ui/Section";

export default function HeroSection() {
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
