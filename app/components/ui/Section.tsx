import React from "react";

export default function Section({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`h-screen w-full ${className ?? ""}`}>
      {children}
    </section>
  );
}
