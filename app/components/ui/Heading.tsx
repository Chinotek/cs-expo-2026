import React from "react";
import Link from "next/link";

export default function Heading({
  title,
  children,
  className,
  href,
}: {
  title: string;
  children?: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const content = (
    <>
      {children}
      {title}
    </>
  );

  return href ? (
    <h1 className={`text-2xl font-bold lg:text-3xl ${className}`}>
      <Link href={href} className="hover:text-purple-300 transition-colors">
        {content}
      </Link>
    </h1>
  ) : (
    <h1 className={`text-2xl font-bold lg:text-3xl ${className}`}>{content}</h1>
  );
}
