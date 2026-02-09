"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Clean up on unmount
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <nav className="rounded-xl border-chicago sticky top-0 z-50 flex items-center justify-center py-4 bg-chicago">
      <div className="flex items-center">
        {/* Hamburger/X Icon */}
        <button
          className="group relative w-8 h-8 flex flex-col justify-center items-center  lg:hidden z-50"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-purple-500 group-active:bg-purple-300 transition-transform duration-300 origin-center ${
              open ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-purple-500 group-active:bg-purple-300 my-1 transition-all duration-300 origin-center ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-purple-500 group-active:bg-purple-300 transition-transform duration-300 origin-center ${
              open ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
        {/* Desktop Nav */}
        <ul className="hidden lg:flex lg:items-center lg:gap-12 xl:text-lg">
          <li>
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={70}
                height={70}
                className="bg-transparent"
                style={{ backgroundColor: "transparent" }}
              />
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="flex items-center gap-2 hover:text-purple-300"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="flex items-center gap-2 hover:text-purple-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="flex items-center gap-2 hover:text-purple-300"
            >
              Partners
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="flex items-center gap-2 hover:text-purple-300"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="flex items-center gap-2 hover:text-purple-300"
            >
              Hall of Fame
            </Link>
          </li>
          <li>
            <Link
              href=""
              className=" flex items-center gap-2 hover:text-purple-300"
            >
              About
            </Link>
          </li>
        </ul>
        {/* Mobile Nav Overlay */}
        <div
          className={`fixed top-16 left-0 w-full h-[calc(100vh-64px)] bg-zinc-900/95 flex flex-col items-center justify-center gap-8 transition-transform duration-300 lg:hidden ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ zIndex: 40 }}
        >
          <ul className="flex flex-col items-center gap-8 text-xl">
            <li>
              <Link
                href=""
                className="flex items-center gap-2 hover:text-purple-300"
                onClick={() => setOpen(false)}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="flex items-center gap-2 hover:text-purple-300"
                onClick={() => setOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="flex items-center gap-2 hover:text-purple-300"
                onClick={() => setOpen(false)}
              >
                Partners
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="flex items-center gap-2 hover:text-purple-300"
                onClick={() => setOpen(false)}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="flex items-center gap-2 hover:text-purple-300"
                onClick={() => setOpen(false)}
              >
                Hall of Fame
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="flex items-center gap-2 hover:text-purple-300"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
