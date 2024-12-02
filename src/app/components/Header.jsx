"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    // Add logic to handle the search query (e.g., redirect to a search results page)
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">
            {" "}
            <span className="text-yellow-300 font-extrabold text-pretty">
              Osman
            </span>{" "}
            Blog
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            href="/"
            className="text-white hover:text-yellow-300 transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-white hover:text-yellow-300 transition"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="text-white hover:text-yellow-300 transition"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="text-white hover:text-yellow-300 transition"
          >
            Contact
          </Link>

          {/* Search Input */}
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-1 top-1 px-3 py-1 text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 transition"
            >
              Go
            </button>
          </form>
        </nav>

        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <Link href="/sign-in">
            <button className="jmd:block bg-yellow-400 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition">
              Sign in
            </button>
          </Link>
        </SignedOut>

        {/* Call-to-Action Button */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-500 text-white p-4 space-y-4">
          <Link href="/" className="block py-2 hover:text-yellow-300">
            Home
          </Link>
          <Link href="/about" className="block py-2 hover:text-yellow-300">
            About
          </Link>
          <Link href="/services" className="block py-2 hover:text-yellow-300">
            Services
          </Link>
          <Link href="/contact" className="block py-2 hover:text-yellow-300">
            Contact
          </Link>

          {/* Mobile Search Input */}
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-1 top-1 px-3 py-1 text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 transition"
            >
              Go
            </button>
          </form>
        </nav>
      )}
    </header>
  );
}
