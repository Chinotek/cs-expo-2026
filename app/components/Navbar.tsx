import { ChevronDown, EllipsisVertical, Globe } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-2.5 xl:py-4">
      <Link href="/" className="flex items-center gap-2">
        <Globe />
        <span className="text-md tracking-wider font-bold xl:text-lg">
          CS Expo 2025
        </span>
      </Link>
      <div className="flex items-center">
        <EllipsisVertical className="cursor-pointer hover:text-purple-400 transition lg:hidden" />
        <ul className="hidden lg:flex lg:items-center lg:gap-6 xl:text-lg xl:gap-10">
          <li>
            <Link
              href=""
              className="flex items-center gap-2 hover:text-purple-300"
            >
              <span>
                <ChevronDown />
              </span>
              Events
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="flex items-center gap-2 hover:text-purple-300"
            >
              <span>
                <ChevronDown />
              </span>
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
              className=" flex items-center gap-2hover:text-purple-300"
            >
              About
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
        </ul>
      </div>
    </nav>
  );
}
