"use client";
import HeroSection from "./components/home/HeroSection";
import EventsSection from "./components/home/EventsSection";
import dynamic from "next/dynamic";
import PartnersSection from "./components/home/PartnersSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-6">
      <HeroSection />
      <PartnersSection />
      <EventsSection />
    </main>
  );
}
