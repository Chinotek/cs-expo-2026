import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center gap-4 py-4 lg:flex-row lg:items-start lg:gap-0">
      <div className="flex flex-row w-full">
        <div className="flex flex-col w-1/2 gap-2.5">
          <h2 className="text-md font-bold xl:text-lg">CS Expo</h2>
          <ul className="flex flex-col gap-1.5 text-sm xl:text-md">
            <li>
              <Link href="/" className="hover:text-purple-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-purple-300">
                Schedule
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-purple-300">
                Panelists
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-purple-300">
                Speakers
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-1/2 gap-2.5">
          <h2 className="text-md font-bold xl:text-lg">Partners</h2>
          <ul className="flex flex-col gap-1.5 text-sm xl:text-md">
            <li>
              <Link href="/" className="hover:text-purple-300">
                Major Partners
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-purple-300">
                Minor Partners
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-purple-300">
                Become a Partner
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row w-full">
        <div className="flex flex-col w-1/2 gap-2.5">
          <h2 className="text-md font-bold xl:text-lg">Events</h2>
          <ul className="flex flex-col gap-1.5 text-sm xl:text-md">
            <li>
              <Link href="/" className="hover:text-purple-300">
                Day 1
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-purple-300">
                Day 2
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-1/2 gap-2.5">
          <h2 className="text-md font-bold xl:text-lg">Projects</h2>
          <ul className="flex flex-col gap-1.5 text-sm xl:text-md">
            <li>
              <Link href="/" className="hover:text-purple-300">
                Collection
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-purple-300">
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
