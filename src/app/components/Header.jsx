"use client";

import React, { useState, useEffect } from "react";
import { Button, TextInput } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import {
  SignedIn,
  SignedInUser,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { dark, light } from "@clerk/themes";

export default function Header() {
  const path = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="border-b-2 bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-blue-500 rounded-lg text-white">
            Matheesha&apos;s
          </span>
          Blog
        </Link>

        <div className="flex gap-2 md:order-2">
          <form>
            <TextInput
              type="text"
              placeholder="Search..."
              className="hidden lg:inline"
              rightIcon={AiOutlineSearch}
            />
          </form>
          <Button className="w-12 h-10 lg:hidden" color="gray" pill>
            <AiOutlineSearch />
          </Button>
          <Button
            className="w-12 h-10 hidden sm:inline"
            color="gray"
            pill
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {mounted ? theme === "light" ? <FaSun /> : <FaMoon /> : <FaSun />}
          </Button>
          <SignedIn>
            <UserButton
              appearance={{
                baseTheme: theme === "light" ? light : dark,
              }}
              userProfileUrl="/dashboard?tab=profile"
            />
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">
              <Button color="blue">Sign In</Button>
            </Link>
          </SignedOut>
        </div>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 rounded md:p-0 ${
                  path === "/"
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block py-2 px-3 rounded md:p-0 ${
                  path === "/about"
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`block py-2 px-3 rounded md:p-0 ${
                  path === "/projects"
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500"
                }`}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
