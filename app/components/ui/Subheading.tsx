import React from "react";

export default function Subheading({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={`text-xl font-bold ${className}`}>
      {children}
      {title}
    </h1>
  );
}
